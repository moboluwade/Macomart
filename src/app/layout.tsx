import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { Nunito } from 'next/font/google';
import '@/styles/globals.css';
import Footer from '@/app/component/footer';
import TopBar from '@/app/component/topbar';
import NavBar from '@/app/component/navbar';

const nunito = Nunito({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
   
      <div className={nunito.className}>
        <div className="flex flex-col min-h-screen">
          {/* TopBar only for larger screens */}
          <div className="hidden lg:block">
            <TopBar />
          </div>
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </div>
    
  );
}
