"use client";
import React from "react";
import dynamic from "next/dynamic";

const FooterMap = dynamic(() => import("./FooterMap"), {
  ssr: false,
});
const FooterMapClient = () => {
  return <FooterMap />;
};

export default FooterMapClient;
