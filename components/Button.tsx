import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: "btn_light_lime";
  width: string;
};

const Button = ({ type, title, icon, variant, width }: ButtonProps) => {
  return (
    <button
      className={`duration-150 rounded-md font-medium my-6 mx-auto px-6 py-3 ${variant} w-[${width}px]`}
      type={type}
    >
      {icon && (
        <Image
          src={icon}
          alt={title}
          width={22}
          height={22}
          className="inline-flex mr-3"
        />
      )}
      {title}
    </button>
  );
};

export default Button;
