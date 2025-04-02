import React, { use, useState } from "react";
import Laptop from "./component/laptop";

const Laptops = ({ fetchLaptopPromise }) => {
  const laptopPromise = use(fetchLaptopPromise);
  const laptops = laptopPromise.products;
  const [getLaptop, setGetLaptop] = useState([]);
  const handleGetLaptop = (laptop) => {
    const newGetLaptop = [...getLaptop, laptop];
    setGetLaptop(newGetLaptop);
  };
  // han
  const handleClear = () => {
    // const newGetLaptop = getLaptop.filter((laptop) => laptop.id !== id);
    // const getLaptop = getLaptop([]);
    setGetLaptop([]);
  };
  // scrool to history section
  const handleScrollToFAQ = () => {
    const faqSection = document.getElementById("faq");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className=" bg-[#F4F7FF]">
      {/* smaal device btn */}
      <button
        onClick={handleScrollToFAQ}
        className="btn  mx-auto flex md:hidden text-2xl text-center items-center  m-2 "
      >
        Go to cart{" "}
      </button>
      {/* left e 3 columnn and right e aside */}
      <div className="flex flex-col md:flex-row  container mx-auto justify-center gap-5">
        {/* Two Column Grid Layout and aside */}
        <div className=" bg-[#ddd] p-10 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-1 gap-5  ">
          {laptops.map((laptop) => (
            <Laptop
              key={laptop.id}
              laptop={laptop}
              handleGetLaptop={handleGetLaptop}
            ></Laptop>
          ))}
        </div>
        {/* Aside Bar */}
        <div id="faq" className="  md:block bg-[#ddd] p-10 rounded-xl">
          <h1 className="text-2xl font-bold  underline pb-1">
            {" "}
            Cart History:{getLaptop.length}
          </h1>
          <button onClick={handleClear} className="btn btn-dash mb-5">
            Clear History
          </button>
          {getLaptop.map((getSingelLaptop) => (
            <div className="border-2 border-indigo-600 rounded-md p-2  mb-4">
              <img className="w-12" src={getSingelLaptop.image} alt="" />
              <h1>Brand: {getSingelLaptop.brand}</h1>
              <h1>Price: ${getSingelLaptop.price}</h1>
              <h1>Color: {getSingelLaptop.color}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Laptops;
