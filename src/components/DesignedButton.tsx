import React from "react";
import MenuButton from "./MenuButton";

interface Props {
  size: string;
  buttonText: string;
}

export const DesignedButton: React.FC<Props> = ({ size, buttonText }) => {
  return (
    <MenuButton
      className={"bg-primary-cyan rounded-2xl text-center text-white " + size}
      buttonText={buttonText}
    />
  );
};
