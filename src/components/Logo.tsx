import React from "react";

interface Props {
  imageRoute: string;
  alt: string;
}

const Logo: React.FC<Props> = ({ imageRoute, alt }) => {
  return <img src={imageRoute} alt={alt} />;
};

export default Logo;
