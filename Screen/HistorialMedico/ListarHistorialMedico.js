import {View, Text } from "react-native"

export default function ListarHistorialMedico (){
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Listar HistorialMedico</Text>
            <Button
                title="Ver Detalle"
                onPress={() => navigation.navigate("DetalleHistorialMedico")}
            />
            <Button
                title="Editar HistorialMedico"
                onPress={() => navigation.navigate("EditarHistorialMedico")}
            />
        </View>
    );
}