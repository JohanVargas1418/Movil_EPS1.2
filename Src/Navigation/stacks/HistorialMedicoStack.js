import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListarHistorialMedico from "../../../Screen/HistorialMedico/ListarHistorialMedico";
import DetalleHistorialMedico from "../../../Screen/HistorialMedico/DetalleHistorialMedico";
import EditarHistorialMedico from "../../../Screen/HistorialMedico/EditarHistorialMedico";

const Stack = createStackNavigator();

export default function HistorialMedicoStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarHistorialMedico"
                component={ListarHistorialMedico}
                options={{ title: "HistorialMedico" }}
            />
             <Stack.Screen 
                name= "DetalleHistorialMedico"
                component={DetalleHistorialMedico}
                options={{ title: "Detalle HistorialMedico" }}
            />
             <Stack.Screen 
                name= "EditarHistorialMedico"
                component={EditarHistorialMedico}
                options={{ title: "Nuevo/Editar HistorialMedico" }}
            />
        </Stack.Navigator>
    );
}