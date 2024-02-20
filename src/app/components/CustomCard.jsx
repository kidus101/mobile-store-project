/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaStar } from "react-icons/fa";

const CustomCard = ({
  imageUrl,
  title,
  description,
  discount,
  price,
  items,
  coupon,
  rating,
}) => {
  return (
    <div className="bg-white rounded-lg p-1 h-full relative">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-auto mb-2 object-contain"
      />

      <div className="absolute bottom-[160px] left-2 bg-green-400 text-white px-[6px] py-[2px] text-sm rounded-md">
        리턴 가능
      </div>

      <div className="flex flex-col">
        {/* Description */}
        <p className="text-sm my-2">{description}</p>
        <div className="flex items-center my-1">
          <span className="text-red-500 font-bold mr-2">{discount}%</span>
          <p className="">{price}</p>
          <p className="text-[10px]">원</p>
        </div>

        {/* Conditionally Rendering A Coupon  */}
        {coupon && (
          <div>
            <p className="text-[10px] my-1">{coupon}</p>
          </div>
        )}
        <div className="flex">
          <FaStar className="text-[10px] mt-2 mr-[2px] text-gray-400" />
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
