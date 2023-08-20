import React from "react";
import Logo from "./Logo";
import { ReactComponent as ShortlyLogo } from "../images/logo.svg";
import { ReactComponent as InstagramLogo } from "../images/icon-instagram.svg";
import { ReactComponent as FacebookLogo } from "../images/icon-facebook.svg";
import { ReactComponent as PinterestLogo } from "../images/icon-pinterest.svg";
import { ReactComponent as XLogo } from "../images/x-social-media-logo-icon.svg";
import FooterBlockItem from "./FooterBlockItem";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";

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
      <FooterBlockItem
        className={FOOTER_ITEM_STYLE}
        to={"#"}
        title="Link Shortening"
      />
      <FooterBlockItem
        className={FOOTER_ITEM_STYLE}
        to={"#"}
        title="Branded Links"
      />
      <FooterBlockItem
        className={FOOTER_ITEM_STYLE}
        to={"#"}
        title="Analytics"
      />
    </Wrapper>
    <Wrapper
      title={"Resources"}
      className={FOOTER_BLOCK_STYLE}
      titleStyle={FOOTER_TITLE_STYLE}
    >
      <FooterBlockItem className={FOOTER_ITEM_STYLE} to={"#"} title="Blog" />
      <FooterBlockItem
        className={FOOTER_ITEM_STYLE}
        to={"#"}
        title="Developers"
      />
      <FooterBlockItem className={FOOTER_ITEM_STYLE} to={"#"} title="Support" />
    </Wrapper>
    <Wrapper
      title={"Company"}
      className={FOOTER_BLOCK_STYLE}
      titleStyle={FOOTER_TITLE_STYLE}
    >
      <FooterBlockItem className={FOOTER_ITEM_STYLE} to={"#"} title="About" />
      <FooterBlockItem
        className={FOOTER_ITEM_STYLE}
        to={"#"}
        title="Our Team"
      />
      <FooterBlockItem className={FOOTER_ITEM_STYLE} to={"#"} title="Careers" />
      <FooterBlockItem className={FOOTER_ITEM_STYLE} to={"#"} title="Contact" />
    </Wrapper>
    <div className="w-full flex mt-7 h-7 justify-center">
      <Link
        to={"https://www.facebook.com/"}
        className={FOOTER_SOCIAL_ICON_STYLE}
      >
        <FacebookLogo />
      </Link>
      <Link to={"https://x.com/"} className={FOOTER_SOCIAL_ICON_STYLE}>
        <XLogo fill="#FFFFFF" />
      </Link>
      <Link to={"https://pinterest.com/"} className={FOOTER_SOCIAL_ICON_STYLE}>
        <PinterestLogo />
      </Link>
      <Link
        to={"https://www.instagram.com/"}
        className={FOOTER_SOCIAL_ICON_STYLE}
      >
        <InstagramLogo />
      </Link>
    </div>
  </div>
);

export default Footer;
