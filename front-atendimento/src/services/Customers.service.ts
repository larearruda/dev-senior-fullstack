import { ApiHttp } from "./Api.service";

export interface Customer {
  id: number;
}

export const getAllCustomers = async (): Promise<any> => {
  try {
    const response = await ApiHttp.get("customers");
    return { success: true, response: response.data };
  } catch (error) {
    console.log(error);
    return { success: false, error: error };
  }
};
