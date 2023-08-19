import React from "react";
import Logo from "./Logo";
import ShortlyLogo from "../images/logo.svg";
import FooterBlockItem from "./FooterBlockItem";
import Wrapper from "./Wrapper";

const FOOTER_BLOCK_STYLE: string = "max-md:py-5";
const Footer = () => (
  <div className="bg-neutral-veryDarkBlue max-md:text-center md:flex ">
    <div className="justify-center">
      <Logo imageRoute={ShortlyLogo} alt="Shortly logo" />
    </div>
    <Wrapper
      title={"Features"}
      className={FOOTER_BLOCK_STYLE}
      titleStyle={"text-white"}
    >
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
    </Wrapper>
    <Wrapper
      title={"Resources"}
      className={FOOTER_BLOCK_STYLE}
      titleStyle={"text-white"}
    >
      <FooterBlockItem className="text-neutral-grayishViolet" title="Blog" />
      <FooterBlockItem
        className="text-neutral-grayishViolet"
        title="Developers"
      />
      <FooterBlockItem className="text-neutral-grayishViolet" title="Support" />
    </Wrapper>
    <Wrapper
      title={"Company"}
      className={FOOTER_BLOCK_STYLE}
      titleStyle={"text-white"}
    >
      <FooterBlockItem className="text-neutral-grayishViolet" title="About" />
      <FooterBlockItem
        className="text-neutral-grayishViolet"
        title="Our Team"
      />
      <FooterBlockItem className="text-neutral-grayishViolet" title="Careers" />
      <FooterBlockItem className="text-neutral-grayishViolet" title="Contact" />
    </Wrapper>
  </div>
);

export default Footer;
