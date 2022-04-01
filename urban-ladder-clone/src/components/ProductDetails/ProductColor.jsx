import React, { useEffect, useState } from "react";
import { ProdDescButton } from "./ProdDescButton";

export const ProductColor = ({ finish }) => {
  let [selected, setSelect] = useState(finish[0]);
  useEffect(() => {}, [selected]);
  return (
    <div>
      {finish.map((el) => {
        if (selected === el) {
          return (
            <ProdDescButton el={el} selected={true} setSelect={setSelect} />
          );
        } else {
          return (
            <ProdDescButton el={el} selected={false} setSelect={setSelect} />
          );
        }
      })}
    </div>
  );
};
