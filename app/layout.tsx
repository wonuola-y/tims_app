import { Bodoni_Moda } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bodoni",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoniModa.variable}`}>
      <body>{children}</body>
    </html>
  );
}
