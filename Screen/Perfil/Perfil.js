import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottonComponent from "../../components/BottonComponent";
import api from "../../Src/Services/conexion";
import { logoutUser } from '../../Src/Services/AuthService';


export default function PerfilScreen({ navigation }) {
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);   

    useEffect(() => {
        const cargarPerfil = async () => {
            try {
                const token = await AsyncStorage.getItem("userToken");
                if (!token) {
                    Alert.alert("No se encontró el token de usuario, redirigiendo al login");
                    return;
                }

                console.log("intentado cargar el perfil con token:", token);
                const response = await api.get("/me");
                console.log("Respuesta del perfil:", response.data);
                setUsuario(response.data);
                console.log("Perfil cargado exitosamente:", response.data);
            } catch (error) {
                console.error("Error al cargar el perfil:", error);

                if(error.isAuthError || error.shoulRedirectToLogin) {
                    console.log("Error de autenticacion manejado por el interceptor, redirigiendo al login");
                    return;
                }

                if (error.response) {
                    console.error("error Response", error.response.status, error.response.data);

                    Alert.alert("error del servidor", `Error ${error.response.status}: ${error.response.data?.message || "Ocurrió un error al cargar el perfil"}`,
                        [
                            {
                             Text: "OK",
                                onPress: async () => {
                                await AsyncStorage.removeItem("userToken");
                                }
                            }       
                        ]
                    );
                } else if (error.request) {
                    Alert.alert("Error de conexión", "No se pudo conectar al servidor. Verifica tu conexión a Internet.",
                        [
                            {
                                Text: "OK",
                                onPress: async () => {
                                    await AsyncStorage.removeItem("userToken");
                                }
                            }
                        ]
                    );
                } else {
                    Alert.alert(
                        "error",
                        "ocurrido en un error inesperado al cargar el perfil.",
                        [
                            {
                                Text: "OK",
                                onPress: async () => {
                                    await AsyncStorage.removeItem("userToken");
                                }
                            }
                        ]
                    );
                }
            } finally {
                setLoading(false);
            }
        };
        cargarPerfil();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#1976D2" />
            </View>
        );
    }

    if (!usuario) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Perfil de usuario</Text>
                <View style={styles.containerPerfil}>
                    <Text style={styles.errorText}>No se pudo cargar el perfil.</Text>  
                </View>
            </View>
        );
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil de Usuario</Text>
            <View style={styles.containerPerfil}>
                <Text style={styles.label}>Nombre: {usuario.user.name || "No disponible"}</Text>
                <Text style={styles.label}>Correo: {usuario.user.email || "No disponible"}</Text>

                <BottonComponent title="Editar Perfil" onPress={() => {}} />
                <BottonComponent
                title="Cerrar Sesión"
                onPress={async () => {
                    await logoutUser();
                }}
            />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    containerPerfil: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
    },
});

