"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface Certificate {
  id: number;
  title: string;
  image: string;
}

const CertificatePage = () => {
  const [selectedImage, setSelectedImage] = useState<Certificate | null>(null);

  const CertificateImage: Certificate[] = [
    {
      id: 1,
      title: "Chapakhana Certificate",
      image: "/Certificate/2.jpg",
    },
    {
      id: 2,
      title: "Bangladesh Mudrun Shilpa Samity",
      image: "/Certificate/3.jpg",
    },
    {
      id: 3,
      title: "Fire License",
      image: "/Certificate/4.jpg",
    },
    {
      id: 4,
      title: "TIN Certificate",
      image: "/Certificate/5.jpg",
    },
    {
      id: 5,
      title: "Tax Registrations Certificate",
      image: "/Certificate/6.jpg",
    },
    {
      id: 6,
      title: "Islami Bank Certificate",
      image: "/Certificate/7.jpg",
    },
  ];

  const openModal = (certificate: Certificate) => {
    setSelectedImage(certificate);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 relative inline-block">
          Certificate
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-green-400"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CertificateImage.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative w-full bg-gray-100 p-4">
                <div className="aspect-[3/4] w-full overflow-hidden rounded-lg border-2 border-gray-200 relative">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain bg-white transition-transform duration-500 hover:scale-105"
                    priority={certificate.id <= 2}
                  />
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                  {certificate.title}
                </h3>
                <button
                  onClick={() => openModal(certificate)}
                  className="bg-green-400 hover:bg-green-500 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 transform shadow-md"
                  aria-label={`View ${certificate.title}`}
                >
                  See
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-blue-950 bg-opacity-30 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div
              className="relative bg-white rounded-lg w-full max-w-6xl max-h-[95vh] overflow-hidden shadow-2xl transform transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full z-20 transition-all duration-300 hover:scale-110 transform shadow-lg"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="bg-gradient-to-r from-green-400 to-green-500 p-4">
                <h3
                  id="modal-title"
                  className="text-white text-xl sm:text-2xl font-bold text-center"
                >
                  {selectedImage.title}
                </h3>
              </div>
              <div className="w-full h-[calc(95vh-80px)] overflow-auto bg-gray-50 p-4 sm:p-8">
                <div className="flex items-start justify-center min-h-full relative w-full h-full">
                  <div className="relative w-full h-full">
                    <Image
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      fill
                      sizes="(max-width: 1536px) 100vw, 1536px"
                      className="object-contain rounded-lg shadow-lg"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificatePage;
