import React from "react";
import MachineCard from "./MachineCard";
import Link from "next/link";

type Machine = {
  id: string;
  image: string;
  title: string;
  functionStr: string;
  size: string;
};

const OurMachinery = () => {
  const machines: Machine[] = [
    {
      id: "1",
      image: "/Printing Machineries/1.jpg",
      title: "Offset Printing Machine",
      functionStr: "High-quality offset printing",
      size: '19" x 26"',
    },
    {
      id: "2",
      image: "/Printing Machineries/2.jpg",
      title: "Digital Printing Press",
      functionStr: "Digital printing and design",
      size: '23" x 36"',
    },
    {
      id: "3",
      image:
        "/Printing Machineries/automatic-polar-paper-cutting-machine-removebg-preview.png",
      title: "Automatic Paper Cutting",
      functionStr: "Precision automated cutting",
      size: '45" x 60"',
    },
    {
      id: "4",
      image: "/Poly Machineries/1.jpg",
      title: "Poly Bag Making Machine",
      functionStr: "HDPE/LDPE poly production",
      size: '12" x 18"',
    },
    {
      id: "5",
      image: "/Poly Machineries/2.jpg",
      title: "Blown Film Extrusion",
      functionStr: "Plastic film extrusion",
      size: '24" x 36"',
    },
    {
      id: "6",
      image: "/Printing Machineries/8.jpg",
      title: "Die Cutting Machine",
      functionStr: "Precision die cutting",
      size: '20" x 30"',
    },
  ];

  return (
    <div className="mt-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="border-b-2 px-2 border-[#38B980] text-3xl font-extrabold text-center max-w-65 mx-auto mb-10">
          Our Machineries
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {machines.map((machine, i) => {
            return (
              <MachineCard
                key={machine.id}
                functionStr={machine.functionStr}
                size={machine.size}
                image={machine.image}
                title={machine.title}
                index={i}
              />
            );
          })}
        </div>

        <div className="flex flex-row items-center justify-center mt-10">
          <Link
            href="/machineries"
            className="bg-[#38B980] text-white px-6 py-3 rounded-full font-bold hover:bg-[#2d9268] transition-colors duration-300"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurMachinery;
