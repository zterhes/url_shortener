import React from "react";
import Logo from "./Logo";
import ShortlyLogo from "../images/logo.svg";
import FooterBlockItem from "./FooterBlockItem";

const FOOTER_BLOCK_STYLE: string = "max-md:py-5";
const Footer = () => {
  return (
    <div className="bg-neutral-veryDarkBlue max-md:text-center md:flex ">
      <Logo imageRoute={ShortlyLogo} alt="Shortly logo" />
      <div className="max-md:py-5">
        <h1 className="text-white">Features</h1>
        <FooterBlockItem
          className="text-neutral-grayishViolet"
          title="Link Shortening"
        />
        <FooterBlockItem
          className="text-neutral-grayishViolet"
          title="Branded Links"
        />
        <FooterBlockItem
          className="text-neutral-grayishViolet"
          title="Analytics"
        />
      </div>
      <div className={FOOTER_BLOCK_STYLE}>
        <h1 className="text-white">Resources</h1>
        <FooterBlockItem className="text-neutral-grayishViolet" title="Blog" />
        <FooterBlockItem
          className="text-neutral-grayishViolet"
          title="Developers"
        />
        <FooterBlockItem
          className="text-neutral-grayishViolet"
          title="Support"
        />
      </div>
      <div className={FOOTER_BLOCK_STYLE}>
        <h1 className="text-white">Company</h1>
        <FooterBlockItem className="text-neutral-grayishViolet" title="About" />
        <FooterBlockItem
          className="text-neutral-grayishViolet"
          title="Our Team"
        />
        <FooterBlockItem
          className="text-neutral-grayishViolet"
          title="Careers"
        />
        <FooterBlockItem
          className="text-neutral-grayishViolet"
          title="Contact"
        />
      </div>
    </div>
  );
};

export default Footer;
