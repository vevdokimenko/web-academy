import React from "react";

export const ProductList = (props) => {
  console.log(props);
  return (
    <div>
      <h2>{props.submenu.subTitle}</h2>
    </div>
  );
};
