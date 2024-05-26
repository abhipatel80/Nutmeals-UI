import React from "react";

const services = [
  {
    id: 1,
    name: "Convenient Store",
    icon: "/icons/services_category_icons/1 dry roasting.svg",
  },
  {
    id: 2,
    name: "Advance Technology",
    icon: "/icons/services_category_icons/2 vacum pack.svg",
  },
  {
    id: 3,
    name: "Quality Products",
    icon: "/icons/services_category_icons/3 gift curation.svg",
  },
  {
    id: 4,
    name: "Convenient Store",
    icon: "/icons/services_category_icons/1 dry roasting.svg",
  },
  {
    id: 5,
    name: "Advance Technology",
    icon: "/icons/services_category_icons/2 vacum pack.svg",
  },
  {
    id: 6,
    name: "Quality Products",
    icon: "/icons/services_category_icons/3 gift curation.svg",
  },
];

const Services = () => {
  return (
    <div className="left-div right-div bg-[#f5f5f5] shadow-md border border-solid border-gray-100 rounded-2xl md:p-7 sm:p-5 p-5 mt-12 w-full">
      <div className="flex justify-between">
        <div className="top-section text-black mb-7">
          <h2 className="md:text-4xl text-2xl pb-2 pl-4">Why us?!</h2>
          <p className="font-notmal pl-4">Your next door storefront</p>
        </div>
      </div>

      <div className="w-full gap-4 2xl:gap-20 flex flex-wrap lg:flex-nowrap justify-start items-start pl-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-center items-center text-center min-w-20 1xl:max-w-fit"
          >
            <img
              src={service.icon}
              alt={service.name}
              className="md:w-[100px] w-[80px] lg:w-full h-auto bg-white rounded-full border-gray-400 border p-2.5"
            />
            <p className="mt-4 2xl:text-[22px] text-[12px] md:text-[14px] 2xl:min-w-40 min-w-20 2xl:max-w-full max-w-20">
              {service.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
