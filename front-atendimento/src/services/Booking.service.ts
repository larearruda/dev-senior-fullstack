import { ApiHttp } from "./Api.service";

export interface Booking {
  id: number;
  bookingCode: string;
  customerId: number;
  hotelId: number;
  checkInDate: string;
  checkOutDate: string;
  status: string;
}

export const getAllBookings = async (): Promise<any> => {
  try {
    const response = await ApiHttp.get("bookings");
    return { success: true, response: response.data };
  } catch (error) {
    console.log(error);
    return { success: false, error: error };
  }
};
