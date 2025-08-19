import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaTag } from "react-icons/fa";
import ListingCard from "../component/ListingCard";
import CardData from "../data/CardData.json";

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/484/484167.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const CatagoryListings = () => {
  const position = [11.9404, 108.4583];
  const filtered = CardData.filter((item) => item.type === "accommodation");

  return (
    <div className="flex h-screen max-w-screen-2xl mx-auto">
      <div className="w-full md:w-3/5 overflow-y-auto px-4 md:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center font-semibold mb-6 gap-2">
          <p>Hơn 1000 ngôi nhà trên khu vực bản đồ</p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaTag />
            <span>Giá đã bao gồm mọi khoản phí</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <ListingCard key={item.id} {...item} size="large" />
          ))}
        </div>
      </div>

      <div className="hidden md:block w-2/5">
        <div className="sticky top-0 h-screen">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className="h-full w-full rounded-none"
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
    </div>
  );
};

export default CatagoryListings;
