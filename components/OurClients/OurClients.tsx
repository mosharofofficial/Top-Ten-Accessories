import Image from "next/image";
import React from "react";

type Client = {
  src: string;
  alt: string;
  pos: string;
};

const clients: Client[] = [
  {
    src: "/Clients/c1.png",
    alt: "Bio Gen",
    pos: "top-[22%] left-[14%] md:left-[27%]",
  },
  {
    src: "/Clients/c2.png",
    alt: "Target",
    pos: "top-[39%] left-[10%] md:left-[22%]",
  },
  {
    src: "/Clients/c3.png",
    alt: "Cotton On Group",
    pos: "top-[57%] left-[8%] md:left-[17%]",
  },
  {
    src: "/Clients/c4.png",
    alt: "RIPZONE",
    pos: "top-[74%] left-[12%] md:left-[22%]",
  },

  {
    src: "/Clients/c5.png",
    alt: "Richman",
    pos: "top-[22%] right-[14%] md:right-[13%]",
  },
  {
    src: "/Clients/c6.png",
    alt: "Infinity",
    pos: "top-[39.5%] right-[10%] md:right-[8%]",
  },
  {
    src: "/Clients/c7.png",
    alt: "Lubnan",
    pos: "top-[57%] right-[8%] md:right-[4%]",
  },
  {
    src: "/Clients/c8.png",
    alt: "Zizzi",
    pos: "top-[74%] right-[12%] md:right-[8%]",
  },

  { src: "/Clients/c9.png", alt: "EDCL", pos: "top-[14%] left-1/2" },
];

const OurClients = () => {
  return (
    <section className="mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="border-b-2 px-2 border-[#38B980] text-3xl font-extrabold text-center max-w-[260px] mx-auto mb-10">
          Our Clients
        </h2>

        <div className="lg:hidden flex flex-row flex-wrap items-center justify-center gap-2">
          {clients.map((client, i) => (
            <Image
              key={i}
              src={client.src}
              alt={client.alt}
              width={150}
              height={80}
              sizes="(max-width: 640px) 90px, (max-width: 1024px) 120px, 150px"
              className={`
                  
                `}
            />
          ))}
        </div>
        <div className="relative w-full hidden lg:block aspect-[16/9] max-h-[520px]">
          {/* Background */}
          <Image
            src="/otherImages/clients.jpg"
            alt="Our Clients"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-contain z-0 rounded-full"
          />

          {/* Logos */}
          <div className="absolute inset-0">
            {clients.map((client, i) => (
              <Image
                key={i}
                src={client.src}
                alt={client.alt}
                width={150}
                height={80}
                sizes="(max-width: 640px) 90px, (max-width: 1024px) 120px, 150px"
                className={`
                  absolute z-10 object-contain
                  w-[90px] sm:w-[120px] md:w-[150px]
                  -translate-x-1/2 -translate-y-1/2
                  ${client.pos}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
