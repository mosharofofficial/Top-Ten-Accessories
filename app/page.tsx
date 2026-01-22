import About from "@/components/AboutUs/About";
import ContactUs from "@/components/ContactUs/ContactUs";
import Hero from "@/components/Hero/Hero";
import OurClients from "@/components/OurClients/OurClients";
import OurMachinery from "@/components/OurMachinery/OurMachinery";
import OurProducts from "@/components/OurProducts/OurProducts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white pb-10">
      <Hero />
      <About />
      <OurClients />
      <OurProducts />
      <OurMachinery />
      <ContactUs />

      {/* <div>
        <Link
          href="/contact"
          className="inline-block bg-green-400 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 transform shadow-md text-center "
        >
          Contact Us
        </Link>
      </div> */}
    </main>
  );
}
