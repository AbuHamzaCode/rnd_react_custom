import React, { useState } from "react";
import { Rnd } from "react-rnd";
import "./activities_type_modal_item.scss";
const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

const ActivitiesTypeModalItem = (props) => {
  const [RND, SetRND] = useState({ width: 100, height: 100, x: 0, y: 0 });

  const changePosition = (e, d) => {
    SetRND({ x: d.x, y: d.y });
  };

  const changeSize = (e, direction, ref, delta, position) => {
    console.log("position", position);
    SetRND({
      width: ref.style.width,
      height: ref.style.height,
      ...position,
    });
  };

  return (
    <Rnd
      style={style}
      size={{ width: RND.width, height: RND.height }}
      position={{ x: RND.x, y: RND.y }}
      onDragStop={changePosition}
      onResizeStop={changeSize}
    ></Rnd>
  );
};

export default ActivitiesTypeModalItem;
