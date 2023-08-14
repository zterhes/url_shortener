import React from "react";
import MenuButton from "./MenuButton";

interface Props {
  className: string;
}

const MENU_BUTTON_STYLE: string =
  "text-neutral-grayishViolet w-full text-center";

const MenuDesktop: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex basis-1/4 justify-between">
        <MenuButton
          className={"text-neutral-grayishViolet"}
          buttonText={"Features"}
        />
        <MenuButton className={MENU_BUTTON_STYLE} buttonText={"Pricing"} />
        <MenuButton className={MENU_BUTTON_STYLE} buttonText={"Resources"} />
      </div>
      <div className="flex basis-1/6 justify-between">
        <MenuButton className={MENU_BUTTON_STYLE} buttonText={"Login"} />
        <MenuButton
          className={
            "bg-primary-cyan rounded-2xl text-center text-white w-full"
          }
          buttonText={"Sign Up"}
        />
      </div>
    </div>
  );
};

export default MenuDesktop;
