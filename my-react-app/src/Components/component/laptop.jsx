import React, { useState } from "react";

const Laptop = ({ laptop, handleGetLaptop }) => {
  const { brand, image, title, model, description, discount } = laptop;
  const [cart, setCart] = useState(false);
  const handleCard = () => {
    setCart(true);
    handleGetLaptop(laptop);
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="border-2 border-solid rounded-md p-6 bg-slate-400 ">
      <img className=" h-36 object-cover   " src={image} alt="" />
      <h2 className="text-left text-base md:text-lg lg:text-xl">
        Name: {brand}
      </h2>
      {/* add to cart and details button */}
      <div className=" flex gap-5 mt-4">
        <button className="btn btn-dash" onClick={handleCard} disabled={cart}>
          {cart ? "Added" : "Add to cart"}
        </button>
        <button className="btn btn-dash" onClick={() => setShowModal(true)}>
          Details
        </button>
      </div>

      {showModal && (
        <div className="modal modal-open bg-[#F4F7FF]">
          <div className="modal-box">
            <p className=" ">
              <span className="font-bold">Model:</span> {model}
            </p>
            <p className=" ">
              <span className="font-bold">Discount:</span> ${discount}
            </p>
            <p className=" ">
              <span className="font-bold">Title:</span> {title}
            </p>
            <p className="py-4">
              <span className="font-bold">Decription:</span> {description}
            </p>
            <div className="modal-action">
              <button
                className="btn btn-dash"
                onClick={() => setShowModal(false)}
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Laptop;
