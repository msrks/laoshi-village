import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alan's Website",
  description: "XXX Villege Community",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto px-4 min-h-screen flex flex-col">
            <header className="py-2">
              <div className="flex items-center justify-between">
                <ModeToggle />
                <div className="font-bold">Laoshi Village Education Hub</div>
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
                  <Link href="/about">Learn</Link>
                  <Link href="/blog">News</Link>
                  <Link href="/inquiry">Contact</Link>
                </nav>
              </div>
            </header>
            {children}
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
