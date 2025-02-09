"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Prelura</title>
        <meta name="description" content="User dashboard || Home" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ApolloProvider client={client}>
          <ThemeProvider>
            <ToastContainer />
            {children}
          </ThemeProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
