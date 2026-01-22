import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

type Product = {
  id: string;
  image: string;
  title: string;
};

export default function OurProducts() {
  const products: Product[] = [
    {
      id: "1",
      image: "/Biogen Work Order/Box-1.jpg",
      title: "Biogen Medicine Box",
    },
    {
      id: "2",
      image: "/Biogen Work Order/Box-2.jpg",
      title: "Biogen Medicine Box",
    },
    {
      id: "3",
      image: "/Biogen Work Order/Box-3.jpg",
      title: "Biogen Medicine Box",
    },
    {
      id: "4",
      image: "/Biogen Work Order/Box-4.jpg",
      title: "Biogen Medicine Box",
    },
    {
      id: "5",
      image: "/Biogen Work Order/Box-5.jpg",
      title: "Biogen Medicine Box",
    },
    {
      id: "6",
      image: "/Biogen Work Order/Box.jpg",
      title: "Biogen Medicine Box",
    },
    {
      id: "7",
      image: "/printingItems/InnerCarton.jpg",
      title: "Medicine Box",
    },
    {
      id: "8",
      image: "/printingItems/giftBoxes.png",
      title: "Gift Boxes",
    },
    {
      id: "9",
      image:
        "/printingItems/colorful-collection-of-shopping-bags-displayed-creatively-against-a-plain-background-for-retail-and-marketing-use-various-type-of-shopping-bags-isolated-free-png.png",
      title: "Shopping Bags",
    },
  ];

  return (
    <div className="mt-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="border-b-2 px-2 border-[#38B980] text-3xl font-extrabold text-center max-w-65 mx-auto mb-10">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => {
            return (
              <ProductCard
                index={i}
                key={product.id}
                image={product.image}
                title={product.title}
              />
            );
          })}
        </div>

        <div className="flex flex-row items-center justify-center mt-10">
          <Link
            href="/products"
            className="bg-[#38B980] text-white px-6 py-3 rounded-full font-bold hover:bg-[#2d9268] transition-colors duration-300"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}
