import React from "react";

interface Props {
  imageRoute: string;
  alt: string;
  fill?: string;
}

const Logo: React.FC<Props> = ({ imageRoute, alt, fill }) => {
  return <img src={imageRoute} alt={alt} />;
};

export default Logo;
