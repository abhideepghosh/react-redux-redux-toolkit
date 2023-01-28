import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

const ChangeColor = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <div
      style={{ color: theme, cursor: "pointer" }}
      onClick={() => {
        dispatch(changeColor(theme === "red" ? "blue" : "red"));
      }}
    >
      ChangeColor
    </div>
  );
};

export default ChangeColor;
