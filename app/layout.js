
import { Sora , Inter } from "next/font/google";


import "./globals.css";

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora-sans',  
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter-sans',  
  display: 'swap',
});

export const metadata = {
  title: {
    default: "CloudForge",
    template: "%s | CloudForge",
  },
  description:
    "CloudForge provides business consulting, strategy, and digital transformation solutions to help organizations grow.",
};

export default async function RootLayout({ children }) {



  return (
    <html lang="en">
      <body className={`${sora.variable} ${inter.variable} overflow-x-hidden`}>
          {children}
      </body>
    </html>
  );
}