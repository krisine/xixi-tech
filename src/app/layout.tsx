import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './components/theme-provider';
import AIBackground from './components/AIBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'XIXI TECH - Innovation through Intelligence',
  description:
    'Leading AI and hardware integration solutions for the future of technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative min-h-screen overflow-hidden">
            <AIBackground />
            <div className="relative z-10">
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
