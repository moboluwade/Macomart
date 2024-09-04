import { Nunito } from "next/font/google";
import '@/styles/globals.css';
import Footer from "@/app/component/footer";
import TopBar from '../app/component/topbar';
import NavBar from '@/app/component/navbar';

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="flex flex-col min-h-screen">
          <div className="hidden lg:block">
            <TopBar />
          </div>
          <NavBar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
