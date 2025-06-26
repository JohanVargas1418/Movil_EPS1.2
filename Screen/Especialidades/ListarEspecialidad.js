import React from "react";
import {View, Text } from "react-native";
import { Button } from "react-native";

export default function ListarEspecialidad ({navigation}){
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Listar Especialidades</Text>
            <Button
                title="Ver Detalle"
                onPress={() => navigation.navigate("DetalleEspecialidad")}
            />
            <Button
                title="Editar Especialidad"
                onPress={() => navigation.navigate("EditarEspecialidad")}
            />
        </View>
    );
}