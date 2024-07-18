import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { FilterContextProvider } from "@/contexts/filter-context";

const saira = Saira({ subsets: ["latin"], weight: ["300", "400", "600"] });

export const metadata: Metadata = {
  title: "Capputeeno",
  description: "Desafio Front-end Caputeeno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={saira.className}>
        <FilterContextProvider>
          <Header />
          {children}
        </FilterContextProvider>
      </body>
    </html>
  );
}
