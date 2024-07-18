import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import WhatsApp from "@/components/utils/WhatsApp";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Glossour",
  description: "Digital Marketing Agency...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ID}`}></script>
        <script
          dangerouslySetInnerHTML={
            {
              __html: `
              window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ID},{
            page_path: window.location.pathname,});
            `,
            }
          }


        />


      </Head>
      <body className={`${inter.className} bg-secondary-300`}>
        <Toaster position="bottom-left" />
        <Navbar />
        {children}
        <WhatsApp />
        <Footer />
      </body>
    </html>
  );
}
