import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import '@/styles/globals.css';
import Footer from "@/app/component/footer";  
import NavBar from '@/app/component/navbar';

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Macomart",
  description: "ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} flex flex-col min-h-screen`}>
        <NavBar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
