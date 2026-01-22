"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactUs = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
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

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(contentTimer);
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

  return (
    <div className="mt-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`border-b-2 px-2 border-[#38B980] text-3xl font-extrabold text-center max-w-43.75 mx-auto mb-10 transition-all duration-1000 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          Contact Us
        </h2>

        <div
          className={`flex flex-col lg:flex-row gap-8 items-center justify-center transition-all duration-1000 ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="h-75 w-75 lg:h-112.5 lg:w-112.5 hidden sm:block relative">
            <Image
              alt="Contact Us illustration"
              src={"/Illustrations/Contact_us.svg"}
              fill={true}
              className="object-contain"
              sizes="(max-width: 1024px) 300px, 450px"
            />
          </div>

          <div className="w-full lg:w-112.5 bg-white p-8 rounded-2xl shadow-2xl">
            <h2 className="text-2xl font-bold text-[#20364E] mb-6 text-center lg:text-left">
              Send us a Message
            </h2>

            {status.message && (
              <div
                className={`mb-4 p-4 rounded-lg ${
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
      </div>
    </div>
  );
};

export default ContactUs;
