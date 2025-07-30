// components/LocationDropdown.jsx
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const suggestions = [
  {
    title: "Nearby",
    description: "Find what's around you",
    icon: <FaMapMarkerAlt className="text-blue-500" />,
  },
  {
    title: "Bangkok, Thailand",
    description: "For sights like Grand Palace",
    icon: <FaMapMarkerAlt className="text-green-500" />,
  },
  {
    title: "Melbourne, Australia",
    description: "For its top-notch dining",
    icon: <FaMapMarkerAlt className="text-pink-500" />,
  },
  {
    title: "Dalat, Vietnam",
    description: "For nature-lovers",
    icon: <FaMapMarkerAlt className="text-orange-400" />,
  },
];

const LocationDropdown = ({ onSelect }) => {
  return (
    <div className="absolute top-full left-0 z-50 mt-2 w-[250px] bg-white rounded-xl shadow-lg p-4">
      <h3 className="text-sm font-semibold mb-3 text-gray-600">
        Suggested destinations
      </h3>
      <ul className="space-y-2">
        {suggestions.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
            onClick={() => onSelect(item.title)}
          >
            <div className="bg-gray-100 p-2 rounded-lg">{item.icon}</div>
            <div>
              <p className="font-semibold text-sm">{item.title}</p>
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationDropdown;
