import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import { MainNav } from "@/components/layout/main-nav";
import { siteConfig } from "@/config/site";
import { MobileNav } from "@/components/layout/mobile-nav";
import { PropsWithChildren, Suspense } from "react";
import { AudioPlayer } from "./audio-player";
import { absoluteUrl } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: "The best place to visit",
  keywords: [
    "nextjs",
    "react",
    "react server components",
    "skateshop",
    "skateboarding",
    "kickflip",
  ],
  authors: [
    {
      name: "msrks",
      url: "https://blog.msrks.app/about",
    },
  ],
  creator: "msrks",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@msrks",
  },
  icons: {
    icon: "/icon.png",
  },
  manifest: absoluteUrl("/site.webmanifest"),
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative min-h-screen flex flex-col items-center ">
            <header className="sticky top-0 z-50 w-full border-b bg-background">
              <div className="container flex h-16 items-center ">
                <MainNav items={siteConfig.mainNav} />
                <MobileNav
                  mainNavItems={siteConfig.mainNav}
                  // sidebarNavItems={dashboardConfig.sidebarNav}
                />
                <ModeToggle />
                <Suspense fallback={<div>Loading...</div>}>
                  <AudioPlayer />
                </Suspense>
              </div>
            </header>
            {children}
            <footer className="hidden md:block w-full border-t bg-secondary ">
              <div className="container flex py-4 items-center text-lg font-semibold justify-around">
                <Link href="/">Volunteers Wanted</Link>
                <Link href="/about">Donation</Link>
                <Link href="/blog">Visiting Appointment</Link>
              </div>
            </footer>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
