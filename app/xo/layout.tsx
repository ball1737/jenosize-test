import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game XO",
  description: "Jenosize test | Game XO",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
