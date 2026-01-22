"use client";

import React from "react";
import MachineCard from "@/components/OurMachinery/MachineCard";

type Machine = {
  image: string;
  title: string;
  functionStr: string;
  size: string;
};

type MachinerySection = {
  sectionTitle: string;
  items: Machine[];
};

const machinerySections: MachinerySection[] = [
  {
    sectionTitle: "Printing Machineries",
    items: [
      {
        image: "/Printing Machineries/1.jpg",
        title: "Offset Printing Machine",
        functionStr: "High-quality offset printing",
        size: '19" x 26"',
      },
      {
        image: "/Printing Machineries/2.jpg",
        title: "Digital Printing Press",
        functionStr: "Digital printing and design",
        size: '23" x 36"',
      },
      {
        image: "/Printing Machineries/3.jpg",
        title: "Screen Printing Machine",
        functionStr: "Screen printing for fabrics",
        size: '20" x 28"',
      },
      {
        image: "/Printing Machineries/4.jpg",
        title: "Label Printing Machine",
        functionStr: "Label and sticker printing",
        size: '12" x 18"',
      },
      {
        image: "/Printing Machineries/5.jpg",
        title: "Flexo Printing Press",
        functionStr: "Flexographic printing",
        size: '24" x 32"',
      },
      {
        image: "/Printing Machineries/6.jpg",
        title: "UV Printing Machine",
        functionStr: "UV curing printing",
        size: '18" x 24"',
      },
      {
        image: "/Printing Machineries/7.jpg",
        title: "Gravure Printing Press",
        functionStr: "Gravure printing for packaging",
        size: '26" x 38"',
      },
      {
        image: "/Printing Machineries/8.jpg",
        title: "Die Cutting Machine",
        functionStr: "Precision die cutting",
        size: '20" x 30"',
      },
      {
        image:
          "/Printing Machineries/automatic-polar-paper-cutting-machine-removebg-preview.png",
        title: "Automatic Paper Cutting Machine",
        functionStr: "Automated paper cutting with precision",
        size: '45" x 60"',
      },
    ],
  },
  {
    sectionTitle: "Poly Machineries",
    items: [
      {
        image: "/Poly Machineries/1.jpg",
        title: "Poly Bag Making Machine",
        functionStr: "HDPE/LDPE poly bag production",
        size: '12" x 18"',
      },
      {
        image: "/Poly Machineries/2.jpg",
        title: "Blown Film Extrusion Machine",
        functionStr: "Plastic film extrusion",
        size: '24" x 36"',
      },
      {
        image: "/Poly Machineries/3.jpg",
        title: "Poly Printing Machine",
        functionStr: "Poly bag printing",
        size: '16" x 22"',
      },
      {
        image: "/Poly Machineries/4.jpg",
        title: "Poly Sealing Machine",
        functionStr: "Heat sealing for poly bags",
        size: '10" x 14"',
      },
      {
        image: "/Poly Machineries/5.jpg",
        title: "Poly Cutting Machine",
        functionStr: "Automated poly cutting",
        size: '18" x 24"',
      },
    ],
  },
];

export default function MachineryPage() {
  return (
    <section className="bg-gray-50">
      {/* Title Section */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#20364E] mb-4">
            Our Machinery
          </h1>
          <div className="w-full h-1 bg-[#38B980] mx-auto mb-4" />
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our state-of-the-art printing and poly manufacturing
            machinery equipped with the latest technology.
          </p>
        </div>
      </div>

      {/* ===== Machinery Sections ===== */}
      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {machinerySections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                {/* Section Title */}
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#20364E] border-l-4 border-[#38B980] pl-4">
                    {section.sectionTitle}
                  </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {section.items.map((machine, index) => (
                    <MachineCard
                      key={index}
                      image={machine.image}
                      title={machine.title}
                      functionStr={machine.functionStr}
                      size={machine.size}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
