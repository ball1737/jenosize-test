import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to Jenosize test system",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
