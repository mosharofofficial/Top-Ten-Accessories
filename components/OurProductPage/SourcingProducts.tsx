import React from "react";

type Product = string;

const SourcingProducts = () => {
  const products: Product[][] = [
    ["Woven Label", "Button", "Pocketing", "Carton"],
    ["Zipper", "Inter Lining", "Sewing Thread"],
    ["Tag Pin", "Twill Tap", "Elastic"],
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] text-center mb-12">
          We are also sourcing ...
        </h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4 max-w-6xl mx-auto">
          {products.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {column.map((product, productIndex) => (
                <div
                  key={productIndex}
                  className="flex items-center gap-3 group"
                >
                  <span className="text-[#38B980] font-bold text-xl transition-transform duration-300 group-hover:translate-x-1">
                    {">>>"}
                  </span>
                  <span className="text-gray-700 text-lg transition-colors duration-300 group-hover:text-[#38B980]">
                    {product}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SourcingProducts;
