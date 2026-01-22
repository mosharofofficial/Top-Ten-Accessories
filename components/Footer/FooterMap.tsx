"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "@/lib/leafletFix";

const FooterMap = () => {
  return (
    <div className="h-50 w-full  overflow-hidden">
      <MapContainer
        center={[23.732542, 90.4150386]} // Dhaka 😄
        zoom={14}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default FooterMap;
