import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { routing } from "@/src/i18n/routing";

import Header from "@/componets/ui/header/Header";
const Footer = dynamic(()=> import("@/componets/ui/footer/Footer"));
export default async function LocaleLayout({ children, params,}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
        <NextIntlClientProvider messages={messages}>

          <Header />
          {children}
          <Footer />

        </NextIntlClientProvider>
  );
}