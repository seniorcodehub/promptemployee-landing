import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ContactModalProvider } from "@/components/ui/contact-modal";
import { I18nProvider } from "@/lib/i18n";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Promptemployee - Contrata y Gestiona tu Fuerza de Trabajo Digital",
  description:
    "Plataforma para contratar, desplegar y gestionar Trabajadores Digitales. No vendemos chatbots, ofrecemos empleados de IA listos para integrarse en equipos humanos, aumentando productividad y capacidad.",
  keywords: [
    "AI",
    "trabajadores digitales",
    "automation",
    "digital workers",
    "IA empresarial",
    "no-code",
    "MCP",
    "multi-modelo",
    "productividad",
  ],
  openGraph: {
    title: "Promptemployee - Contrata tu Fuerza de Trabajo Digital",
    description:
      "Empleados de IA que se integran en tus equipos humanos. Panel visual no-code, arquitectura multi-modelo y servicio integral.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} antialiased`}>
        <I18nProvider>
          <ContactModalProvider>{children}</ContactModalProvider>
        </I18nProvider>
      </body>
    </html>
  );
}

