import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application",
  description: "Jenosize test | Application",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
