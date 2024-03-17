import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application  | Report",
  description: "Jenosize test | Application",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
