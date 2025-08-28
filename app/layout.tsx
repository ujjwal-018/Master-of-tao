import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "MTA",
  description: "Master of Tao Association",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
