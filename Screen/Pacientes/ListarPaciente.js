import {View, Text } from "react-native"

export default function ListarPaciente (){
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Listar Paciente</Text>
            <Button
                title="Ver Detalle"
                onPress={() => navigation.navigate("DetallePaciente")}
            />
            <Button
                title="Editar Paciente"
                onPress={() => navigation.navigate("EditarPaciente")}
            />
        </View>
    );
}