"use client";

import { useState, useEffect, memo } from "react";
import { Monitor, Laptop, Printer, ScanLine } from "lucide-react";

const EquipmentTable = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const equipmentData = [
    { sl: "01", description: "PC", quantity: "08 Set", icon: Monitor },
    { sl: "02", description: "Laptop", quantity: "02 Set", icon: Laptop },
    {
      sl: "03",
      description: "Printer (Laser & Colour)",
      quantity: "04 Set",
      icon: Printer,
    },
    { sl: "04", description: "Scanner", quantity: "03 Set", icon: ScanLine },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== Title ===== */}
        <div
          className={`text-center mb-8 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Official Equipment :
          </h2>
        </div>

        {/* ===== Table Wrapper ===== */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* ===== Desktop Table ===== */}
          <div className="hidden sm:block overflow-hidden rounded-lg shadow-lg border-2 border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-600">
                  <th className="py-4 px-6 text-left text-sm sm:text-base lg:text-lg font-bold text-white border-r-2 border-white w-1/6">
                    SL NO
                  </th>
                  <th className="py-4 px-6 text-left text-sm sm:text-base lg:text-lg font-bold text-white border-r-2 border-white w-1/2">
                    Description
                  </th>
                  <th className="py-4 px-6 text-center text-sm sm:text-base lg:text-lg font-bold text-white w-1/3">
                    Quantity
                  </th>
                </tr>
              </thead>

              <tbody>
                {equipmentData.map((item, index) => {
                  const IconComponent = item.icon;

                  return (
                    <tr
                      key={index}
                      className="bg-slate-700 hover:bg-slate-600 transition-colors duration-300"
                    >
                      <td className="py-4 px-6 text-sm sm:text-base lg:text-lg font-medium text-white border-r-2 border-slate-500">
                        <div className="flex items-center gap-2">
                          <IconComponent size={20} className="text-green-400" />
                          {item.sl}
                        </div>
                      </td>

                      <td className="py-4 px-6 text-sm sm:text-base lg:text-lg text-white border-r-2 border-slate-500">
                        {item.description}
                      </td>

                      <td className="py-4 px-6 text-sm sm:text-base lg:text-lg text-white text-center">
                        {item.quantity}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* ===== Mobile Cards ===== */}
          <div className="sm:hidden space-y-4">
            {equipmentData.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-lg shadow-lg overflow-hidden border-2 border-gray-200"
                >
                  <div className="bg-green-600 text-white py-3 px-4">
                    <div className="flex items-center gap-2">
                      <IconComponent size={22} />
                      <span className="font-bold text-base">
                        SL NO: {item.sl}
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-700 text-white">
                    <div className="py-3 px-4 border-b-2 border-slate-500">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-sm text-gray-300">
                          Description:
                        </span>
                        <span className="font-medium text-base">
                          {item.description}
                        </span>
                      </div>
                    </div>

                    <div className="py-3 px-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-sm text-gray-300">
                          Quantity:
                        </span>
                        <span className="font-medium text-base">
                          {item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(EquipmentTable);
