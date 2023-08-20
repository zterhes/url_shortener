import React from "react";
import Logo from "./Logo";
import { ReactComponent as ShortlyLogo } from "../images/logo.svg";
import { ReactComponent as InstagramLogo } from "../images/icon-instagram.svg";
import { ReactComponent as FacebookLogo } from "../images/icon-facebook.svg";
import { ReactComponent as PinterestLogo } from "../images/icon-pinterest.svg";
import { ReactComponent as XLogo } from "../images/x-social-media-logo-icon.svg";
import FooterBlockItem from "./FooterBlockItem";
import Wrapper from "./Wrapper";

const FOOTER_BLOCK_STYLE: string = "max-md:py-5";
const FOOTER_TITLE_STYLE: string = "text-white pb-3";
const FOOTER_ITEM_STYLE: string = "text-neutral-grayishViolet pt-2";
const FOOTER_SOCIAL_ICON_STYLE: string = "mx-3";

const Footer = () => (
  <div className="bg-neutral-veryDarkBlue max-md:text-center md:flex py-10 ">
    <div className="w-full flex justify-center mb-5">
      <ShortlyLogo fill="#FFFFFF" />
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
    <div className="w-full flex mt-7 h-7 justify-center">
      <div className={FOOTER_SOCIAL_ICON_STYLE}>
        <FacebookLogo />
      </div>
      <div className={FOOTER_SOCIAL_ICON_STYLE}>
        <XLogo fill="#FFFFFF" />
      </div>
      <div className={FOOTER_SOCIAL_ICON_STYLE}>
        <PinterestLogo />
      </div>
      <div className={FOOTER_SOCIAL_ICON_STYLE}>
        <InstagramLogo />
      </div>
    </div>
  </div>
);

export default Footer;
