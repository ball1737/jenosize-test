import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game 24",
  description: "Jenosize test | Game 24",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
