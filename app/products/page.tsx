"use client";

import React from "react";
import ProductCard from "@/components/OurProducts/ProductCard";
import SpecializedProducts from "@/components/OurProductPage/SpecializedProducts";
import SourcingProducts from "@/components/OurProductPage/SourcingProducts";

type Product = {
  image: string;
  title: string;
};

type ProductSection = {
  sectionTitle: string;
  items: Product[];
};

const productSections: ProductSection[] = [
  {
    sectionTitle: "Hang Tag Items",
    items: [
      { image: "/Hang Tag Items/1.jpg", title: "Hang Tag Design 1" },
      { image: "/Hang Tag Items/2.jpg", title: "Hang Tag Design 2" },
      { image: "/Hang Tag Items/3.jpg", title: "Hang Tag Design 3" },
      { image: "/Hang Tag Items/4.jpg", title: "Hang Tag Design 4" },
      { image: "/Hang Tag Items/5.jpg", title: "Hang Tag Design 5" },
    ],
  },
  {
    sectionTitle: "Leather Products",
    items: [
      { image: "/Our Leather Product Items/1.jpg", title: "Leather Badge 1" },
      { image: "/Our Leather Product Items/2.jpg", title: "Leather Badge 2" },
      { image: "/Our Leather Product Items/3.jpg", title: "Leather Badge 3" },
      { image: "/Our Leather Product Items/4.jpg", title: "Leather Badge 4" },
      { image: "/Our Leather Product Items/5.jpg", title: "Leather Badge 5" },
      { image: "/Our Leather Product Items/6.jpg", title: "Leather Badge 6" },
      { image: "/Our Leather Product Items/7.jpg", title: "Leather Badge 7" },
      { image: "/Our Leather Product Items/8.jpg", title: "Leather Badge 8" },
    ],
  },
  {
    sectionTitle: "Sticker Products",
    items: [
      { image: "/Our Sticker Product Items/1.jpg", title: "Sticker Design 1" },
      { image: "/Our Sticker Product Items/2.jpg", title: "Sticker Design 2" },
      { image: "/Our Sticker Product Items/3.jpg", title: "Sticker Design 3" },
      { image: "/Our Sticker Product Items/4.jpg", title: "Sticker Design 4" },
      { image: "/Our Sticker Product Items/5.jpg", title: "Sticker Design 5" },
      { image: "/Our Sticker Product Items/6.jpg", title: "Sticker Design 6" },
      { image: "/Our Sticker Product Items/7.jpg", title: "Sticker Design 7" },
      { image: "/Our Sticker Product Items/8.jpg", title: "Sticker Design 8" },
      { image: "/Our Sticker Product Items/9.jpg", title: "Sticker Design 9" },
      {
        image: "/Our Sticker Product Items/10.jpg",
        title: "Sticker Design 10",
      },
      {
        image: "/Our Sticker Product Items/11.jpg",
        title: "Sticker Design 11",
      },
    ],
  },
  {
    sectionTitle: "Printed Gum Tape",
    items: [
      { image: "/Printed Gum Tape/1.jpg", title: "Gum Tape 1" },
      { image: "/Printed Gum Tape/2.jpg", title: "Gum Tape 2" },
      { image: "/Printed Gum Tape/3.jpg", title: "Gum Tape 3" },
      { image: "/Printed Gum Tape/4.jpg", title: "Gum Tape 4" },
    ],
  },
  {
    sectionTitle: "Printing Items",
    items: [
      { image: "/printingItems/Labels.jpg", title: "Labels" },
      { image: "/printingItems/flyer.jpg", title: "Flyer" },
      { image: "/printingItems/moreFlyers.jpg", title: "Marketing Flyers" },
      { image: "/printingItems/InnerCarton.jpg", title: "Inner Carton" },
      { image: "/printingItems/giftBoxes.png", title: "Gift Boxes" },
      {
        image: "/printingItems/doctorsPrescriptionPad.jpg",
        title: "Prescription Pad",
      },
      {
        image: "/printingItems/CalanderAndDiary.jpg",
        title: "Calendar & Diary",
      },
      {
        image:
          "/printingItems/colorful-collection-of-shopping-bags-displayed-creatively-against-a-plain-background-for-retail-and-marketing-use-various-type-of-shopping-bags-isolated-free-png.png",
        title: "Shopping Bags",
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <section className="bg-gray-50">
      {/* Title Section */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#20364E] mb-4">
            Our Products
          </h1>
          <div className="w-full h-1 bg-[#38B980] mx-auto mb-4" />
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of garments accessories, printing and
            packaging solutions.
          </p>
        </div>
      </div>

      {/* ===== Specialized Products Section ===== */}
      <SpecializedProducts />

      {/* ===== Product Sections ===== */}
      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {productSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                {/* Section Title */}
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#20364E] border-l-4 border-[#38B980] pl-4">
                    {section.sectionTitle}
                  </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {section.items.map((product, index) => (
                    <ProductCard
                      key={index}
                      image={product.image}
                      title={product.title}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Sourcing Products Section ===== */}
      <SourcingProducts />
    </section>
  );
}
