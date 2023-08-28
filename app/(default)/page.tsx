import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "WBI Pre-Akselerator FoodTech & AgriTech",
  description: "Program pelatihan kewirausahaan selama dua bulan gratis",
  icons: {
    icon: "/favicon.png",
  },
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import Slides from "@/components/slides";

export default function Home() {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Slides />
      <Testimonials />
      <Newsletter />
    </>
  );
}
