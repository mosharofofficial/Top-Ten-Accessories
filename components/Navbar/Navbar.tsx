"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Clients", href: "/clients" },
  { name: "Products", href: "/products" },
  { name: "Machineries", href: "/machineries" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <nav
        className={`w-full z-50 bg-[#0a1e3d] transition-[box-shadow,background-color] duration-300 ease-out ${
          isSticky
            ? "fixed top-0 shadow-[0_4px_12px_rgba(0,0,0,0.15)] border-b border-white/10"
            : "relative shadow-none border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/otherImages/fullLogo.png"
                alt="Top Ten Accessories"
                width={160}
                height={48}
                className="h-10 sm:h-11 md:h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-[15px] lg:text-[16px] font-bold transition-colors duration-200 ${
                      active
                        ? "text-white after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-0.5 after:bg-green-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden text-white p-2 rounded-md hover:bg-[#1a2e4d] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-[#0a1e3d] transform transition-transform duration-300 ease-in-out lg:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } shadow-2xl z-50`}
        >
          <div className="flex justify-end p-4">
            <button onClick={closeMenu} className="text-white">
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col gap-2 px-4">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-4 py-3 text-left font-semibold rounded-md transition-colors ${
                    active
                      ? "text-white bg-[#1a2e4d] border-l-4 border-green-400"
                      : "text-gray-300 hover:bg-[#1a2e4d] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            onClick={closeMenu}
            className="fixed inset-0 bg-black/50 lg:hidden z-40"
          />
        )}
      </nav>

      {/* Spacer for sticky */}
      {isSticky && <div className="h-16 md:h-18" />}
    </>
  );
}
