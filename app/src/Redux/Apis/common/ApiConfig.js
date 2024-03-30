import axios from "axios";
// import { BASEURL } from "../../../../config";
import authAxios from "../../../Config/AuthAxios";


export const LoginApi = async (data) => {
  try {
    const loginData = {
      email: data.email,
      password: data.password,
    };

    const res = await authAxios.post("login", loginData);

    return res;
  } catch (err) {
    return err;
  }
};