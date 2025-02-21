import axios from "axios";

enum Urls {
  //   BASE_URL_HTTP = "http://localhost:8080/",
  BASE_URL_HTTP = "http://192.168.15.19:8080",
}

export const ApiHttp = axios.create({
  baseURL: Urls.BASE_URL_HTTP,
});

export const getBookingsByCustomerId = async (
  customerId: string
): Promise<any> => {
  try {
    const response = await ApiHttp.get("bookings/customerId/" + customerId);
    return response.data;
  } catch (error) {
    console.error("Erro:", error);
    return { success: false, error: error };
  }
};
