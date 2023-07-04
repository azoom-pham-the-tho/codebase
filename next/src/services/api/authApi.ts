import { LoginPayload } from "@/shared/interface/auth";
import axiosClient from "./axiosClient";

export default {
  login(user: LoginPayload) {
    const url = "/login";
    return axiosClient.post(url, user);
  },
};
