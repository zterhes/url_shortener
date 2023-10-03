import React from "react";

interface Props {
  title: string;
  className: string;
  titleStyle: string;
  children?: React.ReactNode;
}

const Wrapper: React.FC<Props> = (props: Props) => {
  return (
    <div className={props.className}>
      <h1 className={props.titleStyle}>{props.title}</h1>
      {props.children}
    </div>
  );
};

export default Wrapper;
