import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dark Realm",
  //esto cambiarlo i guess y ver los emoticonos
  description: "Dark Realm, the best rust server on the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
      <Header />
      {children}</body>
    </html>
  );
}
