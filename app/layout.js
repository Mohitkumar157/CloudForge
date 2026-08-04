
import { Sora , Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import "./globals.css";
import Header from "@/componets/ui/header/Header";
import Footer from "@/componets/ui/footer/Footer";

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

  const messages = await getMessages();

  return (
    <html lang="en">
      <body className={`${sora.variable} ${inter.variable} overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}