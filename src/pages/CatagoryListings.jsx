import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";
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
    <div className="flex flex-col md:flex-row max-w-screen-2xl mx-10 mt-4 gap-4">
      <div className="w-full md:w-3/5 flex flex-col space-y-4">
        <div className="flex justify-between font-semibold">
          <p>Hơn 1000 ngôi nhà trên khu vực bản đồ</p>
          <div className="flex items-center gap-2 mx-10">
            <FaTag className="" />
            <span>Giá đã bao gồm mọi khoản phí</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 ">
          {filtered.map((item) => (
            <ListingCard key={item.id} {...item} size="large" />
          ))}
        </div>
      </div>

      <div className="w-full md:w-2/5">
        <div className="sticky top-4">
          <div className="h-[600px] rounded-2xl overflow-hidden shadow-md">
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              className="h-full w-full"
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
    </div>
  );
};

export default CatagoryListings;
