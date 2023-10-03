import React from "react";
import MenuButton from "./MenuButton";

interface Props {
  size: string;
  buttonText: string;
}

export const DesignedButton: React.FC<Props> = ({ size, buttonText }) => {
  return (
    <MenuButton
      className={
        "flex justify-center items-center bg-primary-cyan rounded-2xl text-white " +
        size
      }
      buttonText={buttonText}
    />
  );
};
