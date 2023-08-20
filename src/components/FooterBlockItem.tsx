import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  className: string;
  to: string;
}

const FooterBlockItem: React.FC<Props> = ({ title, className, to }) => {
  return (
    <Link to={to}>
      <p className={className}>{title}</p>
    </Link>
  );
};

export default FooterBlockItem;
