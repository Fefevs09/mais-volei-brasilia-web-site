import type React from "react";
import "./globals.css";
import { Bebas_Neue, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata = {
  title: "Mais Vôlei Brasília - Equipe de Vôlei",
  description: "Site oficial da equipe de vôlei Mais Vôlei Brasília",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <link rel="icon" href="/images/logo-mais-volei-brasilia.png" />
      <body className={`${inter.variable} ${bebas.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
