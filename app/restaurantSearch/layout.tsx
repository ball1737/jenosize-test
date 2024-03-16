import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resaurant Search",
  description: "Jenosize test | Resaurant Search",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
