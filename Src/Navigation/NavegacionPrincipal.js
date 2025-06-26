import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons"; // Añadido MaterialCommunityIcons

import InicioStack from "./stacks/InicioStack";
import PerfilesStack from "./stacks/PerfilStack";
import ConfiguracionesStack from "./stacks/ConfiguracionStack";

const Tab = createBottomTabNavigator();

export default function NavegacionPrincipal() {
    return (
        <Tab.Navigator
            screenOptions={{
                // Estilo para la barra de pestañas en general
                tabBarStyle: {
                    backgroundColor: '#eef6d7', // Fondo blanco limpio para la barra
                    borderTopWidth: 1, // Borde superior sutil
                    borderTopColor: '#3d481d', // Color del borde
                    height: 60, // Aumenta la altura para mayor espacio
                    paddingBottom: 5, // Un poco de padding en la parte inferior para iconos/texto
                    paddingTop: 5, // Un poco de padding en la parte superior
                },
                // Colores de los iconos y texto de la pestaña
                tabBarActiveTintColor: "green", 
                tabBarInactiveTintColor: "#808080", // Gris oscuro para inactiva
                tabBarLabelStyle: {
                    fontSize: 12, // Tamaño de fuente para el texto de la pestaña
                    fontWeight: '600', // Un poco más de peso para el texto
                    marginTop: 2, // Pequeño margen entre icono y texto
                },
            }}
        >
            <Tab.Screen
                name="Inicio"
                component={InicioStack}
                options={{
                    headerShown: false, // Oculta el encabezado del TabNavigator para que el Stack interno lo maneje
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                    tabBarLabel: 'Inicio', // Asegura que el texto de la pestaña sea 'Inicio'
                }}
            />

            <Tab.Screen
                name="Perfil" // Nombre de la ruta (lo que usas para navegar si es necesario)
                component={PerfilesStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        // Icono más apropiado para Perfil
                        <Feather name="user" size={size} color={color} /> // 'user' o 'person'
                    ),
                    tabBarLabel: 'Perfil', // Asegura que el texto de la pestaña sea 'Perfil'
                }}
            />

            <Tab.Screen
                name="Configuración" // Nombre de la ruta
                component={ConfiguracionesStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        // Icono más apropiado para Configuración
                        <Ionicons name="settings-outline" size={size} color={color} /> // 'settings-outline' o 'cog'
                        // O si prefieres de MaterialCommunityIcons:
                        // <MaterialCommunityIcons name="cog-outline" size={size} color={color} />
                    ),
                    tabBarLabel: 'Configuración', // Asegura que el texto de la pestaña sea 'Configuración'
                }}
            />
        </Tab.Navigator>
    );
}