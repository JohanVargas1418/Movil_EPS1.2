import {View, Text } from "react-native"

export default function ListarCita (){
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Listar Citas</Text>
            <Button
                            title="Ver Detalle"
                            onPress={() => navigation.navigate("DetalleCita")}
                        />
                        <Button
                            title="Editar Cita"
                            onPress={() => navigation.navigate("EditarCita")}
                        />
        </View>
    );
}