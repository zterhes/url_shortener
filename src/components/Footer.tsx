import React from "react";
import Logo from "./Logo";
import ShortlyLogo from "../images/logo.svg";
import FooterBlockItem from "./FooterBlockItem";
import Wrapper from "./Wrapper";

const FOOTER_BLOCK_STYLE: string = "max-md:py-5";
const FOOTER_TITLE_STYLE: string = "text-white pb-3";
const FOOTER_ITEM_STYLE: string = "text-neutral-grayishViolet pt-2";

const Footer = () => (
  <div className="bg-neutral-veryDarkBlue max-md:text-center md:flex py-10 ">
    <div className="w-full flex justify-center mb-5">
      <Logo imageRoute={ShortlyLogo} alt="Shortly logo" />
    </div>
    <Wrapper
      title={"Features"}
      className={FOOTER_BLOCK_STYLE}
      titleStyle={FOOTER_TITLE_STYLE}
    >
      <FooterBlockItem className={FOOTER_ITEM_STYLE} title="Link Shortening" />
      <FooterBlockItem className={FOOTER_ITEM_STYLE} title="Branded Links" />
      <FooterBlockItem className={FOOTER_ITEM_STYLE} title="Analytics" />
    </Wrapper>
    <Wrapper
      title={"Resources"}
      className={FOOTER_BLOCK_STYLE}
      titleStyle={FOOTER_TITLE_STYLE}
    >
      <FooterBlockItem className={FOOTER_ITEM_STYLE} title="Blog" />
      <FooterBlockItem className={FOOTER_ITEM_STYLE} title="Developers" />
      <FooterBlockItem className={FOOTER_ITEM_STYLE} title="Support" />
    </Wrapper>
    <Wrapper
      title={"Company"}
      className={FOOTER_BLOCK_STYLE}
      titleStyle={FOOTER_TITLE_STYLE}
    >
      <FooterBlockItem className={FOOTER_ITEM_STYLE} title="About" />
      <FooterBlockItem className={FOOTER_ITEM_STYLE} title="Our Team" />
      <FooterBlockItem className={FOOTER_ITEM_STYLE} title="Careers" />
      <FooterBlockItem className={FOOTER_ITEM_STYLE} title="Contact" />
    </Wrapper>
  </div>
);

export default Footer;
