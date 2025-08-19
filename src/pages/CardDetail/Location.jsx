import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/484/484167.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const Location = () => {
  const position = [11.9404, 108.4583];

  return (
    <div className=" mt-5 min-h-screen border-b border-gray-300 ">
      <h2 className="text-2xl font-semibold mb-6">Nơi bạn sẽ đến</h2>
      <p className="text-gray-700 mb-4">Dalat, Lâm Đồng, Việt Nam</p>

      <div className="h-[500px] rounded-2xl overflow-hidden shadow-md ">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>Đà Lạt, Lâm Đồng</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Location;
