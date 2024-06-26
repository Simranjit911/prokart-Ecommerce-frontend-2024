import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlinePayment, MdVerified } from "react-icons/md";
import { FaIdCard } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";

function Services() {
  const servicesData = [
    {
      logo: <CiDeliveryTruck className="text-blue-600 text-xl md:text-3xl" />,
      heading: "Free Delivery",
      text: "On all orders",
    },
    {
      logo: <MdOutlinePayment className="text-blue-600 text-xl md:text-3xl" />,
      heading: "Safe Payment",
      text: "Secure and trusted transactions",
    },
    {
      logo: <FaShippingFast className="text-blue-600 text-xl md:text-3xl" />,
      heading: "Fast Service",
      text: "Quick turnaround times",
    },
    {
      logo: <MdVerified className="text-blue-600 text-xl md:text-3xl" />,
      heading: "Verified Products",
      text: "High-quality and genuine items",
    },
  ];

  return (
    <div className=" mt-7  grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 rounded-md shadow-md text-center bg-blue-100">
      {servicesData?.map((service, index) => (
        <div
          key={index}
          className="service-card flex flex-col items-center justify-center p-1 md:p-3 hover:scale-105 duration-150 rounded-md hover:bg-blue-300 cursor-pointer border border-blue-500"
        >
          {service.logo}
          <h3 className="md:text-md text-sm md:font-semibold text-gray-800 mt-2">
            {service.heading}
          </h3>
          <p className="text-gray-600 text-xs md:text-sm md:mt-0.5">{service.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;
