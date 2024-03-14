"use client";

import { deleteCookie, setCookie } from "cookies-next";
import { create } from "zustand";

export interface User {
  token: string;
  accessToken: string;
  displayName: string;
  email: string;
  photoURL: string;
  expirationTime: number;
  providerId: string;
  uid: number;
}

interface AuthStore {
  isLogin: boolean;
  user?: User;
  setUser: (user: User) => void;
  setLogin: (data: User) => void;
  setLogout: (deleteDevice?: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLogin: false,
  setUser: (user) => {
    set({ user });
  },
  setLogin: (data) => {
    setCookie("isLogin", true);
    setCookie("token", data.accessToken);
    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("user", JSON.stringify(data));
    set(() => ({ isLogin: true, user: data }));
  },
  setLogout: () => {
    deleteCookie("isLogin");
    deleteCookie("token");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set(() => ({ isLogin: false, user: undefined }));
  },
}));
