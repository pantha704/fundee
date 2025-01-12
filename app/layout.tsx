import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DecentralFund - Decentralized Crowdfunding",
  description: "Empower innovation through decentralized crowdfunding",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-transparent absolute top-0 left-0 right-0 z-10">
          <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              FunDe
            </Link>
            <div className="space-x-4">
              <Button
                asChild
                variant="ghost"
                className="text-white hover:text-blue-300"
              >
                <Link href="/projects">Projects</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-white hover:text-blue-300"
              >
                <Link href="/how-it-works">How It Works</Link>
              </Button>
              <Button
                asChild
                className="bg-white text-purple-900 hover:bg-blue-100"
              >
                <Link href="/connect-wallet">Connect Wallet</Link>
              </Button>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
