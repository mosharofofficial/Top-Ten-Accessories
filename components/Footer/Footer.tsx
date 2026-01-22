import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { TbWorld, TbLicense } from "react-icons/tb";
import { IoIosHome } from "react-icons/io";
import { BiSolidFactory } from "react-icons/bi";
import { PiCertificateFill } from "react-icons/pi";
import { IconType } from "react-icons";
import FooterMapClient from "./FooterMapClient";

type FooterItem = {
  icon: IconType;
  content: string[];
  link?: string;
};

type FooterColumn = FooterItem[];

const Footer = () => {
  const contactInfo: FooterColumn = [
    {
      icon: FaPhone,
      content: ["+88 01715-940599", "+880 1721-596585"],
    },
    {
      icon: MdOutlineEmail,
      content: ["topten126@gmail.com"],
    },
    {
      icon: MdOutlineEmail,
      content: ["zillur@toptenaccessories.com"],
    },
    {
      icon: TbWorld,
      content: ["www.toptenaccessories.com"],
    },
  ];

  const addressInfo: FooterColumn = [
    {
      icon: IoIosHome,
      content: [
        `Head Office :
171 Fakirapool (2nd Floor)
Motijheel, Dhaka-1000.`,
      ],
    },
    {
      icon: BiSolidFactory,
      content: [
        `Factory Address :
38/1, Komor Uddin Lane
Motijheel, Dhaka-1000.
Naljani, Chowrasta, Gazipur-1700`,
      ],
    },
    {
      icon: PiCertificateFill,
      content: ["Certificates"],
      link: "/certificates",
    },
    {
      icon: TbLicense,
      content: ["Licenses"],
      link: "/licenses",
    },
  ];

  const renderFooterColumn = (items: FooterColumn) => (
    <ul className="flex flex-col gap-3 max-w-[300px]">
      {items.map((item, index) => {
        const Icon = item.icon;
        const content = (
          <>
            <Icon className="flex-shrink-0" />
            <div className="flex flex-col gap-0">
              {item.content.map((text, textIndex) => (
                <span key={textIndex}>{text}</span>
              ))}
            </div>
          </>
        );

        return (
          <li key={index} className="flex flex-row items-center gap-3">
            {item.link ? (
              <a
                href={item.link}
                className="flex flex-row items-center gap-3 hover:text-[#1B7A33] transition-colors cursor-pointer"
              >
                {content}
              </a>
            ) : (
              content
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <footer className="p-5 bg-[#20364E] text-white lg:px-40">
      <div className="flex flex-col sm:flex-row flex-wrap gap-10 lg:gap-2 lg:items-center justify-between">
        {renderFooterColumn(contactInfo)}
        {renderFooterColumn(addressInfo)}
        <div className="h-50 w-62.5">
          <FooterMapClient />
        </div>
      </div>

      <p className="text-center mt-4 text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#ff0000] font-semibold">
          Top Ten Accessories
        </span>
        . All Rights Reserved.
      </p>

      <p className="text-center mt-2 text-sm text-gray-400">
        Website by{" "}
        <span className="text-[#1B7A33] font-semibold">MNJ_SyntaxError</span>
      </p>
    </footer>
  );
};

export default Footer;
