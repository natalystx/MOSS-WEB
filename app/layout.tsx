import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "./components/modules/Navbar";
import { cn } from "@/utils/cn";
import PromoBanner from "./components/modules/PromoBanner";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "&MOSS",
  description: "Luxe design tuinmenubelen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          jost.className,
          "w-screen overflow-x-hidden min-h-screen"
        )}
      >
        <Navbar className="sticky top-0 left-0 z">
          <PromoBanner />
        </Navbar>
        <div>{children}</div>
      </body>
    </html>
  );
}
