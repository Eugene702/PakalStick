import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: {
    default: "Pakal Stik",
    template: "%s | Pakal Stik",
  },
};

const Wrap = dynamic(() => import('./wrap'))
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lofi">
      <body>
        <Wrap>
          { children }
        </Wrap>
      </body>
    </html>
  );
}
