import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Container from "@/components/global/Container";
import Navbar from "@/components/navbar/NavBar";
import Provider from "./Provider";
import {ClerkProvider} from "@clerk/nextjs"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ecommerce Store NEXTJS",
  description: "A ecommerce store built to learn NEXTJS with Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
        <Navbar></Navbar>
        <Container className="py-20">
        {children}
        </Container>
        </Provider>
      </body>
    </html>
        </ClerkProvider>
  );
}
