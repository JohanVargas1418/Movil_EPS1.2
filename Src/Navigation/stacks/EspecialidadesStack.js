import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListarEspecialidades from "../../../Screen/Especialidades/ListarEspecialidades";
import DetalleEspecialidad from "../../../Screen/Especialidades/DetalleEspecialidad";
import EditarEspecialidad from "../../../Screen/Especialidades/EditarEspecialidad";

const Stack = createStackNavigator();

export default function EspecialidadesStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name= "ListarEspecialidades"
                component={ListarEspecialidades}
                options={{
                    title: "Especialidades",
                    headerStyle: { // <-- Estilo de encabezado para esta pantalla
                        backgroundColor: '#4A90E2', // Color azul
                    },
                    headerTintColor: '#fff', // Color blanco para el texto del título y el icono de retroceso
                    headerTitleStyle: {
                        fontWeight: 'bold', // Título en negrita
                    },
                }}
            />
            <Stack.Screen
                name= "DetalleEspecialidad"
                component={DetalleEspecialidad}
                options={{
                    title: "Detalle Especialidad",
                    headerStyle: { // <-- Estilo de encabezado para esta pantalla
                        backgroundColor: '#4A90E2', // Mismo color para consistencia
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen
                name= "EditarEspecialidad"
                component={EditarEspecialidad}
                options={{
                    title: "Nueva/Editar Especialidad",
                    headerStyle: { // <-- Estilo de encabezado para esta pantalla
                        backgroundColor: '#4A90E2', // Mismo color para consistencia
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Stack.Navigator>
    );
}