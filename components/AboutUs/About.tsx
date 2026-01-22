"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import UserCards from "../Other/UserCards";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  fbUrl?: string;
};

const About = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => setTitleVisible(true), 200);
    const contentTimer = setTimeout(() => setContentVisible(true), 500);
    const teamTimer = setTimeout(() => setTeamVisible(true), 800);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(contentTimer);
      clearTimeout(teamTimer);
    };
  }, []);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Zillur Rahman Babul",
      role: "Proprietor",
      phone: "+8801715940599",
      email: "zillur@toptenaccessories.com",
      image: "/EmployeesImg/Zillur rahman-01.png",
    },
    {
      id: 2,
      name: "Mosarof Hossen Mamun",
      role: "Head of Marketing",
      phone: "+8801648062162",
      email: "mamun@toptenaccessories.com",
      image: "/EmployeesImg/Musarof Hossain Mamun.jpeg",
      fbUrl: "https://www.facebook.com/share/1DESp7opZY/",
    },
    {
      id: 3,
      name: "Mujibor Rahman Mojib",
      role: "Head of Production",
      phone: "+8801716660867",
      email: "mojib@toptenaccessories.com",
      image: "/EmployeesImg/Mujibor Rahman Mojib.jpeg",
    },
    {
      id: 4,
      name: "Asif Iqbal Shahriar",
      role: "Commercial Incharge",
      phone: "+8801721596585",
      email: "asif@toptenaccessories.com",
      image: "/EmployeesImg/Asif Iqbal Shahriar.jpeg",
    },
    {
      id: 5,
      name: "Raju Ahamed",
      role: "Quality Controller",
      phone: "+8801947599112",
      email: "raju@toptenaccessories.com",
      image: "/EmployeesImg/Raju Ahamed.jpeg",
    },
    {
      id: 6,
      name: "Selim Mollah",
      role: "Head of Design",
      phone: "+8801646789195",
      email: "selim@toptenaccessories.com",
      image: "/EmployeesImg/Salim Mollah .jpeg",
      fbUrl: "https://www.facebook.com/share/1BjU9XbACm/",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block transition-all duration-1000 ${
              titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            About us
            <div
              className={`absolute -bottom-2 left-0 right-0 h-1 bg-green-400 transition-all duration-1000 origin-left ${
                titleVisible ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </h1>
        </div>

        {/* Content Section */}
        <div
          className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Quote Image */}
          <div className="text-6xl sm:text-7xl text-gray-300 text-center mb-4 animate-pulse">
            <div className="relative w-20 h-20 mx-auto">
              <Image
                src="/otherImages/quet.png"
                alt="Quote"
                fill
                className="object-contain"
                sizes="80px"
              />
            </div>
          </div>

          {/* About Text */}
          <p className="text-gray-700 font-medium text-base sm:text-lg leading-relaxed text-center px-4 hover:text-gray-900 transition-colors duration-300">
            Strong, healthy and authentic business relationships have always
            been an important pillar in the success of a company. Protecting
            your business is our business. Because we believe, we are part of
            your business.{" "}
            <span className="text-red-400">Top Ten Accessories</span> not only a
            printer but also a marketer to our clients who understand the
            sensitive responsibilities perfectly.{" "}
            <span className="text-red-400">Top Ten Accessories</span> was
            founded in 2010 to satisfy the need of local customers. We are able
            to offer you a broad range of printing services from graphic design
            and layout to high-speed, high-volume copying in both digital &
            offset printing. We will meet all your corporate stationery and
            printing requirements.
          </p>

          {/* Proprietor Section */}
          <div className="flex items-center justify-center gap-4 mt-8 group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-white border-4 border-green-400 transition-all duration-500 group-hover:border-green-500 shadow-lg relative">
              <Image
                src="/EmployeesImg/Zillur rahman-01.png"
                alt="Zillur Rahman Babul"
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="text-left transition-all duration-300">
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 transition-all duration-300 group-hover:text-gray-950 group-hover:translate-x-2">
                Zillur Rahman Babul
              </h3>
              <p className="text-green-500 text-sm sm:text-base transition-all duration-300 group-hover:translate-x-2">
                Proprietor
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            teamVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 relative inline-block group">
            Our team
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-green-400" />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <UserCards
                key={member.id}
                name={member.name}
                role={member.role}
                phone={member.phone}
                email={member.email}
                image={member.image}
                index={index}
                facebookUrl={member.fbUrl || "#"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
