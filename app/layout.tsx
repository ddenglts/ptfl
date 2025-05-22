import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David's Portfolio",
  description: "David's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = ['Home', 'Projects', 'Contact'];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="p-4">
          <div className="flex gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-white hover:text-gray-300"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
