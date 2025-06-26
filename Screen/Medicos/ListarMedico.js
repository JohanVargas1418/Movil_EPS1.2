import {View, Text } from "react-native"

export default function ListarMedico (){
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Listar Medico</Text>
            <Button
                title="Ver Detalle"
                onPress={() => navigation.navigate("DetalleMedico")}
            />
            <Button
                title="Editar HistorialMedico"
                onPress={() => navigation.navigate("EditarMedico")}
            />
        </View>
    );
}