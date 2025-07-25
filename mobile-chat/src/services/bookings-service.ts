import axios from "axios";

// import { API_URL } from "@env";
const API_URL="http://192.168.15.30:8080"

export const ApiHttp = axios.create({
  baseURL: API_URL,
});

export const getBookingsByCustomerId = async (
  customerId: string
): Promise<any> => {
  console.log("acessando api");
  try {
    const response = await ApiHttp.get("bookings/customerId/" + customerId);
    return { success: true, response: response.data };
  } catch (error) {
    console.error("Erro:", JSON.stringify(error));
    return { success: false, error: error };
  }
};
