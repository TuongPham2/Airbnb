import React from "react";
import { useParams } from "react-router-dom";
import AccommodationDetail from "../Accommodation/AccommodationDetail";
import ServiceDetail from "../Service/ServiceDetail";
import ExperienceDetail from "../Experience/ExperienceDetail";
const CardDetailPage = () => {
  const { type, id } = useParams();

  if (type === "accommodation") return <AccommodationDetail id={id} />;
  if (type === "service") return <ServiceDetail id={id} />;
  if (type === "experience") return <ExperienceDetail id={id} />;
  return <div></div>;
};

export default CardDetailPage;
