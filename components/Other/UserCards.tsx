"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Mail, Facebook } from "lucide-react";

type UserCardsProps = {
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  index: number;
  facebookUrl?: string;
};

const UserCards = ({
  name,
  role,
  phone,
  email,
  image,
  index,
  facebookUrl = "#",
}: UserCardsProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`bg-slate-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="aspect-square bg-white p-4 overflow-hidden group relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 3}
        />
      </div>
      <div className="p-4 text-white">
        <h3 className="font-bold text-lg mb-1 transition-colors duration-300 text-white hover:text-green-400">
          {role}
        </h3>
        <p className="text-sm text-gray-300 mb-3">{name}</p>
        <div className="flex gap-3">
          <a
            href={`tel:${phone}`}
            className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-110 transform"
            aria-label={`Call ${name}`}
          >
            <Phone size={16} className="transition-transform duration-300" />
          </a>
          <a
            href={`mailto:${email}`}
            className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 transform"
            aria-label={`Email ${name}`}
          >
            <Mail size={16} className="transition-transform duration-300" />
          </a>
          <a
            href={facebookUrl}
            className="bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition-all duration-300 hover:scale-110 transform"
            aria-label={`Visit ${name}'s Facebook profile`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={16} className="transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCards;