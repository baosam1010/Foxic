import classNames from "classnames";
import React from "react";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={classNames(className, "removeBefore")}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: 0,
        transform: "translate(0,-50%)",
        zIndex: 2,
      }}
      onClick={onClick}
    >
    </button>
  );
}

export default NextArrow;
