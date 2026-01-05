import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bootzyFont = localFont({
  src: "./resources/Fonts/Bootzy TM.otf",
  display: "swap",
  variable: "--font-bootzy",
});

const rocGroteskFont = localFont({
  src: "./resources/Fonts/roc-grotesk-wide.otf",
  display: "swap",
  variable: "--font-roc-grotesk",
});

export const metadata: Metadata = {
  title: "Hyago Yury | Portfolio",
  description: "Art Director Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${bootzyFont.variable} ${rocGroteskFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
