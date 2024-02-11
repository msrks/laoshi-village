import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import { MainNav } from "@/components/layout/main-nav";
import { siteConfig } from "@/config/site";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Palmtree } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Alan's Website",
  description: "XXX Villege Community",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
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
          <div className="relative min-h-screen flex flex-col items-center">
            <header className="sticky top-0 z-50 w-full border-b bg-background">
              <div className="container flex h-16 items-center ">
                {/* <ModeToggle /> */}
                {/* <div className="font-bold">Laoshi Village Education Hub</div> */}
                {/* <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
                  <Link href="/about">Learn</Link>
                  <Link href="/blog">News</Link>
                  <Link href="/inquiry">Contact</Link>
                </nav> */}
                <MainNav items={siteConfig.mainNav} />
                <MobileNav
                  mainNavItems={siteConfig.mainNav}
                  // sidebarNavItems={dashboardConfig.sidebarNav}
                />
                <ModeToggle />
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
