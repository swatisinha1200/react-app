import React from "react";
import "./Word.css";

export const CustomButton = ({ onClick, label }) => {
  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  );
};

