"use client";

import { useState, useEffect, memo } from "react";
import Image from "next/image";
import { DollarSign, MapPin, Package, Users } from "lucide-react";

const GoalsMission = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const goals = [
    "Cementing high standard of commitments to our clients.",
    "Sourcing top-quality product and supply it to our respected buyers.",
    "Strong Management with capability to execute more than one project.",
  ];

  const scopeItems = [
    "Creative Idea",
    "Consultative Design",
    "Garments Accessories",
    "Pharmaceuticals work",
    "Any kind of Printing",
    "Any other Design & Print",
  ];

  const humanAssets = [
    {
      title: "Human Assets (Back Office/Office Management)",
      items: [
        "Admin Consisting of 4 Person",
        "Accounts Consisting of 2 Person",
        "Marketing Team Consisting of 4 Person",
        "Supervisors Consisting of 2 Person",
      ],
    },
    { title: "Human Assets (Factory Press)", count: "18 Person" },
    { title: "Human Assets (Poly Factory)", count: "43 Person" },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== Goals Section ===== */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 relative inline-block">
            Our Goals / Mission
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-green-400" />
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 font-medium transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <span className="w-3 h-3 bg-green-500 rounded-full mt-2 shrink-0" />
                  <p className="text-gray-700 sm:text-lg leading-relaxed">
                    {goal}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative bg-gray-100 rounded-lg p-6 sm:p-8 shadow hover:shadow-xl transition">
              <Image
                src="/otherImages/target.png"
                alt="Target Mission"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded"
                priority
              />
            </div>
          </div>
        </div>

        {/* ===== Management ===== */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-green-500" size={32} />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              MANAGEMENT & MANPOWER:
            </h2>
          </div>
          <p className="text-gray-700 sm:text-lg max-w-5xl">
            Top Ten Accessories is organized by an experienced management team.
            The management team organizes the customer relation, marketing,
            technical affairs, finance and accounts, technology build-up and
            service with support.
          </p>
        </div>

        {/* ===== Finance ===== */}
        <div className="mb-16 bg-white rounded-lg p-6 sm:p-8 shadow hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="text-green-500" size={32} />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              FINANCE:
            </h2>
          </div>
          <p className="text-gray-700 sm:text-lg mb-4">
            We are financed from our own source. We doing export business with
            Islami Bank PLC, Local br. 75, Motijheel C/A, Dhaka-1000. We are
            financially sound and solvent.
          </p>
          <div className="space-y-1 font-semibold text-[#20364E]">
            <p>Company IRC: 009936516-0202</p>
            <p>Company TIN: 127881789151</p>
          </div>
        </div>

        {/* ===== Area ===== */}
        <div className="mb-16 bg-white rounded-lg p-6 sm:p-8 shadow hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-green-500" size={32} />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              AREA OF THE PROJECT:
            </h2>
          </div>
          <ul className="space-y-2 text-gray-700 sm:text-lg">
            <li>(A) 850 Square feet press.</li>
            <li>(B) Poly Factory 9500 Square feet fully furnished.</li>
          </ul>
        </div>

        {/* ===== Scope ===== */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Package className="text-green-500" size={32} />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              SCOPE OF SUPPLY:
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow hover:shadow-xl transition">
              <p className="text-gray-700 sm:text-lg">
                TOP TEN ACCESSORIES HAS A VAST NUMBER OF PRINTING & PACKAGING
                SERVICES IN DIFFERENT SECTORS AS PER PERFORMED REMAINS. WE
                PHARMACEUTICALS AND HAVE PRINTING SOLUTION FOR THE FOLLOWING
                SECTORS
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {scopeItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-lg p-4 shadow hover:shadow-lg transition-all duration-300 hover:translate-x-2 group"
                >
                  <div className="shrink-0">
                    <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1 group-hover:scale-150 transition-transform duration-300"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1 group-hover:scale-150 transition-transform duration-300"></div>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base font-medium group-hover:text-green-600 transition-colors duration-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Human Assets ===== */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-green-500" size={32} />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              Human Assets:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {humanAssets.map((asset, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow hover:shadow-xl transition hover:-translate-y-1"
              >
                <h3 className="font-bold mb-3 border-b-2 border-green-400 pb-2">
                  {asset.title}
                </h3>

                {asset.items ? (
                  <ul className="space-y-2">
                    {asset.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-700 text-sm sm:text-base"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-semibold text-[#314158]">{asset.count}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(GoalsMission);
