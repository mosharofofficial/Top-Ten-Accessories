"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";
import { BiSolidFactory } from "react-icons/bi";

type ContactInfo = {
  icon: React.ReactNode;
  title: string;
  details: string[];
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactUsPage = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | "loading" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    const titleTimer = setTimeout(() => setTitleVisible(true), 200);
    const contentTimer = setTimeout(() => setContentVisible(true), 500);
    const infoTimer = setTimeout(() => setInfoVisible(true), 800);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(contentTimer);
      clearTimeout(infoTimer);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: null, message: "" });
        }, 5000);
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    }
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: <FaPhone className="text-2xl text-[#38B980]" />,
      title: "Phone",
      details: ["+88 01715-940599", "+880 1721-596585"],
    },
    {
      icon: <FaEnvelope className="text-2xl text-[#38B980]" />,
      title: "Email",
      details: ["topten126@gmail.com", "zillur@toptenaccessories.com"],
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-[#38B980]" />,
      title: "Office Address",
      details: ["171 Fakirapool, Motijheel, Dhaka"],
    },
    {
      icon: <BiSolidFactory className="text-2xl text-[#38B980]" />,
      title: "Factory Address",
      details: ["38/1, Komor Uddin Lane", "Motijheel, Dhaka"],
    },
    {
      icon: <FaClock className="text-2xl text-[#38B980]" />,
      title: "Business Hours",
      details: [
        "Sunday - Thursday: 9:00 AM - 6:00 PM",
        "Friday - Saturday: Closed",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#20364E] mb-4 transition-all duration-1000 ${
              titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            Contact Us
          </h1>
          <div
            className={`w-32 h-1 bg-[#38B980] mx-auto mb-4 transition-all duration-1000 ${
              titleVisible ? "scale-x-100" : "scale-x-0"
            }`}
          />
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Get in touch with us. We&apos;d love to hear from you and discuss
            how we can help with your garment accessory needs.
          </p>
        </div>

        {/* Contact Form & Illustration */}
        <div
          className={`flex flex-col lg:flex-row gap-12 items-center justify-center mb-16 transition-all duration-1000 ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="h-75 w-75 lg:h-112.5 lg:w-112.5 hidden lg:block relative">
            <Image
              alt="Contact Us illustration"
              src={"/Illustrations/Contact_us.svg"}
              fill={true}
              className="object-contain"
              sizes="(max-width: 1024px) 300px, 450px"
              priority
            />
          </div>

          <div className="w-full lg:w-112.5 bg-white p-8 rounded-2xl shadow-2xl">
            <h2 className="text-2xl font-bold text-[#20364E] mb-6 text-center lg:text-left">
              Send us a Message
            </h2>

            {status.message && (
              <div
                className={`mb-4 p-4 rounded-lg transition-all duration-300 ${
                  status.type === "success"
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : status.type === "error"
                      ? "bg-red-100 text-red-800 border border-red-200"
                      : "bg-blue-100 text-blue-800 border border-blue-200"
                }`}
              >
                {status.message}
              </div>
            )}

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-[#F3F4F6] px-4 py-3 outline-none focus:ring-2 focus:ring-[#38B980] rounded-lg transition-all duration-300 hover:bg-gray-100"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="bg-[#F3F4F6] px-4 py-3 outline-none focus:ring-2 focus:ring-[#38B980] rounded-lg transition-all duration-300 hover:bg-gray-100"
                />
              </div>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="bg-[#F3F4F6] px-4 py-3 outline-none focus:ring-2 focus:ring-[#38B980] rounded-lg transition-all duration-300 hover:bg-gray-100"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="bg-[#F3F4F6] px-4 py-3 outline-none focus:ring-2 focus:ring-[#38B980] rounded-lg transition-all duration-300 hover:bg-gray-100"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="bg-[#F3F4F6] px-4 py-3 outline-none focus:ring-2 focus:ring-[#38B980] rounded-lg transition-all duration-300 hover:bg-gray-100 resize-none"
                rows={6}
              />

              <button
                type="submit"
                disabled={status.type === "loading"}
                className="bg-[#38B980] text-white py-3 px-6 font-bold hover:bg-[#2d9268] transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status.type === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-1000 ${
            infoVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-green-50 p-3 rounded-lg group-hover:bg-green-100 transition-colors duration-300">
                  {info.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#20364E] mb-2">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div
          className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-1000 ${
            infoVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="p-6 bg-[#20364E] text-white">
            <h2 className="text-2xl text-white font-bold text-center">
              Find Us on Map
            </h2>
          </div>
          <div className="h-96 bg-gray-200">
            <iframe
              src="https://www.google.com/maps?q=23.7326562,90.4163009&z=19&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Top Ten Accessories Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
