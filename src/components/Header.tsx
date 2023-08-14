import React from "react";
import Logo from "./Logo";
import ShortlyLogo from "../images/logo.svg";
import MenuDialog from "./MenuDialog";
import MenuDesktop from "./MenuDesktop";

const Header = () => {
  return (
    <div className="w-full flex max-md:justify-between">
      <Logo imageRoute={ShortlyLogo} alt="Shortly logo" />
      <div className="md:hidden">
        <MenuDialog />
      </div>
      <MenuDesktop className="hidden md:flex basis-3/4 justify-between ml-10" />
    </div>
  );
};

export default Header;
