/* eslint-disable @next/next/no-img-element */
import React from "react";

const Icon = ({imageUrl , title}) => {
  return (
    <div className="flex flex-col items-center">
      <img src={imageUrl} alt={title} className="w-14 h-14" />
      <p className="text-sm my-3">{title}</p>
    </div>

  );
};

export default Icon;
