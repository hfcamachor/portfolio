import "./globals.scss";
import { Inter, Roboto, Orbitron } from "next/font/google";
import { HeaderApp } from "./components/HeaderApp/HeaderApp";
import 'intersection-observer';

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const orbitron = Orbitron({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});

const orbitronBold = Orbitron({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron-bold",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${orbitron.variable} ${inter.variable} ${orbitronBold.variable}`}>
      <body>
        <HeaderApp />
        {children}
      </body>
    </html>
  );
}
