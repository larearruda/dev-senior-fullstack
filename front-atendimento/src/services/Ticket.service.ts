import { ApiHttp } from "./Api.service";

export interface Ticket {
  id: number;
  bookingCode: string;
  title: string;
  status: string;
}

export const getAllTickets = async (): Promise<any> => {
  try {
    const response = await ApiHttp.get("tickets");
    return { success: true, response: response.data };
  } catch (error) {
    console.log(error);
    return { success: false, error: error };
  }
};
