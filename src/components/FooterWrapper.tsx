import React from "react";

interface Props {
  title: string;
  className: string;
  children: React.ReactNode;
}

const FooterWrapper: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <h1 className={props.className}>{props.title}</h1>
      {props.children}
    </div>
  );
};

export default FooterWrapper;
