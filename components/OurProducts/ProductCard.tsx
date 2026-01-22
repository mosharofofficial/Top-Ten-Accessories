"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import ViewCardButton from "../OurMachinery/ViewCardButton";

type ProductCardProps = {
  image: string;
  title: string;
  index: number;
};

export default function ProductCard({ image, title, index }: ProductCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`bg-white shadow-[0px_0px_20px_gray] overflow-hidden flex flex-col p-3 rounded-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Image */}
      <div className="relative aspect-square bg-[#D7DFEA] rounded-lg overflow-hidden group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 text-[#20364E] flex-1 mt-3">
        <h3 className="text-lg font-bold text-center transition-colors duration-300 hover:text-green-400">
          {title}
        </h3>

        {/* Button */}
        <ViewCardButton item="Product" img={image} name={title} />
      </div>
    </div>
  );
}
