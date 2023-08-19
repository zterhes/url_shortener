import React from "react";

interface Props {
  title: string;
  className: string;
}

const FooterBlockItem: React.FC<Props> = ({ title, className }) => {
  return <p className={className}>{title}</p>;
};

export default FooterBlockItem;
