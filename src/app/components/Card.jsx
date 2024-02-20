/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaStar } from "react-icons/fa";

const Card = ({
  imageUrl,
  title,
  returnable,
  discountRate,
  price,
  coupon,
  rating,
}) => {
  return (
    <div className="p-0">
      <div className="bg-white rounded-lg p-1 h-full relative">
        <img
          src={imageUrl}
          alt="Card Image"
          className="w-full h-auto mb-2 object-contain"
        />
        {returnable && (
          <div className="absolute bottom-[160px] left-2 bg-green-400 text-white px-[6px] py-[2px] text-sm rounded-md">
            리턴 가능
          </div>
        )}
        <div className="flex flex-col">
          {title.length > 15 ? `${title.substring(0, 22)}...` : title}
          <div className="flex items-center my-2">
            {discountRate  && discountRate !== null ? (
              <span className="text-red-500 font-bold mr-2">
                {discountRate}%
              </span>
            ) : null}{" "}
            <p>{price}</p>
            <p className="text-[10px]">원</p>
          </div>
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
    </div>
  );
};

export default Card;
