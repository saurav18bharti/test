import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { ThemeProvider } from "next-themes";
import '../styles/globals.scss'
import Footer from "@/Component/footer/Footer";
import Header from "@/Component/header/Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider>
          <Header/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
