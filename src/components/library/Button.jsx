import React from "react";
import style from './btn.module.css';
const Button = ({className,children}) => {
  return (
    <>
      <button className={className+' btn'}>{children}</button>;
    </>
  );
};

export default Button;
