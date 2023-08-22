import Head from "next/head";

export const metadata = {
  title: "WBI Pre-Akselerator FoodTech & AgriTech",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Features />
      <Slides />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  );
}
