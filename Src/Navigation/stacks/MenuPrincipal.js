import CitasStack from "./stacks/CitasStack";
import EspecialidadesStack from "./stacks/EspecialidadesStack";
import HistorialMedicoStack from "./stacks/HistorialMedicoStack";
import MedicosStack from "./stacks/MedicosStack";
import PacientesStack from "./stacks/PacientesStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";



const Tab = createBottomTabNavigator();

export default function NavegacionPrincipal() {
    return (
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#f4340c", // color cuando está activo
            tabBarActiveTintColor: "#f4340c", // color cuando esta inactivo
            tabBarActiveTintColor: {backgroundColor: "#f4340c"}, // Fondo de la barra
          }}
        >
            <Tab.Screen name="Citas" component={CitasStack} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="calendar" size={24} color={color} />
                ),
            }}/>

            <Tab.Screen name="Especialidades" component={EspecialidadesStack} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="hospital-o" size={24} color="red" />
                )
            }}/>

            <Tab.Screen name="HistorialMedico" component={HistorialMedicoStack} options={{
                tabBarIcon: ({ color, size }) =>
                    <MaterialIcons name="work-history" size={24} color="lightblue" />

            }}/>

            <Tab.Screen name="Medicos" component={MedicosStack} options={{
                tabBarIcon: ({ color, size }) =>
                    <FontAwesome name="user-md" size={24} color="silver" />

            }}/>

            <Tab.Screen name="Pacientes" component={PacientesStack} options={{
                tabBarIcon: ({ color, size }) =>
                    <FontAwesome name="users" size={24} color="orange" />
            }}/>
        </Tab.Navigator>
    );
}
