import React from "react";

const PricingCards = () => {
  const cardData = [
    {
      image: "https://i.imgur.com/Ql4jRdB.png",
      title: "Single User",
      price: "$149",
      features: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"],
    },
    {
      image: "https://i.imgur.com/pJNFEHR.png",
      title: "Double User",
      price: "$149",
      features: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"],
    },
    {
      image: "https://i.imgur.com/Hg0sUJP.png",
      title: "Triple User",
      price: "$149",
      features: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"],
    },
  ];
  return (
    <div className="w-full py-[6rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`}
          >
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={card.image}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              {card.title}
            </h2>
            <p className="text-center text-4xl font-bold">{card.price}</p>
            <div className="text-center font-medium">
              {card.features.map((feature, index) => (
                <p
                  key={index}
                  className={`py-2 border-b mx-8 ${index === 0 ? "mt-8" : ""}`}
                >
                  {feature}
                </p>
              ))}
            </div>
            <button
              className={`bg-[#00df9a] hover:text-[#00df9a] hover:bg-gray-50 duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3`}
            >
              Start Trial
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;