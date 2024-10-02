import type { Metadata } from "next";
import Rodape from "@/components/Rodape/Rodape";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import './globals.css'; 

export const metadata: Metadata = {
  title: "CP5 Front",
  description: "CP5 Front",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  colorScheme: "light"
}

export default function RootLayout({
  children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
          <Cabecalho/>
            {children}
          <Rodape/>
      </body>
    </html>
  );
}
