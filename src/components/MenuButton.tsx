import React from "react";

interface Props {
  className: string;
  buttonText: string;
}

const MenuButton: React.FC<Props> = ({ className, buttonText }) => {
  return (
    <div className={className}>
      <p>{buttonText}</p>
    </div>
  );
};

export default MenuButton;
