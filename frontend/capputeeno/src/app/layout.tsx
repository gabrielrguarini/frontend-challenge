import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { DefaultProviders } from "@/components/default-providers";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { DefaultPageWidth } from "@/components/default-page-width";

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
        <DefaultProviders>
          <Header />
          <DefaultPageLayout>
            <DefaultPageWidth>{children}</DefaultPageWidth>
          </DefaultPageLayout>
        </DefaultProviders>
      </body>
    </html>
  );
}
