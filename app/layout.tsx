"use client";

import "./globals.css";

import { getCookie } from "cookies-next";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { AxiosLayout } from "@/component/axios";
import type { User } from "@/store/auth";

const inter = Inter({ subsets: ["latin"] });
// const googleMapKey = "AIzaSyAIFLj2onkl1L4CufB1-PsLA-F47S_3-Nk";

// export const metadata: Metadata = {
//   title: "Home | Jenosize test system",
//   description: "Home | Jenosize test system",
// };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [mounted, setMounted] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (mounted) {
      const user = JSON.parse(localStorage.getItem("user") || "false") as User;
      const check = getCookie("isLogin");
      if (user && check) setMounted(true);
      else router.push("/login");
    }
  }, [mounted]);
  return (
    <html lang="en">
      <body className={inter.className}>{mounted ? <AxiosLayout>{children}</AxiosLayout> : <></>}</body>
    </html>
  );
}
