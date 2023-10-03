import React from "react";
import constants from "../constants";
import { DesignedButton } from "./DesignedButton";
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
          buttonText={constants.menu.features}
        />
        <MenuButton
          className={MENU_BUTTON_STYLE}
          buttonText={constants.menu.pricing}
        />
        <MenuButton
          className={MENU_BUTTON_STYLE}
          buttonText={constants.menu.resources}
        />
      </div>
      <div className="flex basis-1/6 justify-between">
        <MenuButton
          className={MENU_BUTTON_STYLE}
          buttonText={constants.menu.login}
        />
        <DesignedButton size="w-full" buttonText={constants.menu.signUp} />
      </div>
    </div>
  );
};

export default MenuDesktop;
