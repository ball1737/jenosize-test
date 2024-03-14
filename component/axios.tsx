"use client";

import type { AxiosError } from "axios";
import axios from "axios";
import { useRouter } from "next/navigation";
import type { PropsWithChildren } from "react";
import { useEffect } from "react";

import { useAuthStore } from "@/store/auth";

export const AxiosLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { user, setLogout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
    axios.defaults.headers.common = {
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    };
    axios.defaults.timeout = 60000;

    const interceptor = axios.interceptors.response.use(
      (response) => response,
      async (error: AxiosError<{ message: string }>) => {
        if (error.response?.status === 401) {
          setLogout();
          router.push("/login");
        } else if (error.response?.status === 500) {
          alert();
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, [user]);

  return <>{children}</>;
};
