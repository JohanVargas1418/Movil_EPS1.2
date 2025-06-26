import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../Services/conexion";

export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });
    const { token } = response.data;

    await AsyncStorage.setItem("userToken", token);

    return { success: true, token };
  } catch (error) {
    console.error(
      "Error al iniciar sesión:",
      error.response ? error.response.data : error.message
    );
    return {
      success: false,
      message: error.response ? error.response.data : "Error de conexión",
    };
  }
};


export const logoutUser = async () => {
    try {
      await api.post("/logout");
      await AsyncStorage.removeItem("userToken");
      return { success: true };
    }catch (error) {
      console.error("Error al cerrar sesión:", error.response ? error.response.data : error.message);
      return {
        success: false,
        message: error.response ? error.response.data.message : "Error al cerrar sesión",
      };
    }
};
