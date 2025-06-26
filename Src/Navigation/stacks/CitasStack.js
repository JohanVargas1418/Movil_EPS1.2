import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListarCitas from "../../../Screen/Citas/ListarCitas";
import DetalleCita from "../../../Screen/Citas/DetalleCita";
import EditarCita from "../../../Screen/Citas/EditarCita";

const Stack = createStackNavigator();

export default function CitasStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarCitas"
                component={ListarCitas}
                options={{ title: "Citas" }}
            />
             <Stack.Screen 
                name= "DetalleCita"
                component={DetalleCita}
                options={{ title: "Detalle Cita" }}
            />
             <Stack.Screen 
                name= "EditarCita"
                component={EditarCita}
                options={{ title: "Nueva/Editar Cita" }}
            />
        </Stack.Navigator>
    );
}