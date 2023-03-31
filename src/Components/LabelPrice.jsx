import React from "react";

function LabelPrice({ label, price }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        fontWeight: "bold"
      }}
    >
      <div>{label}</div>
      <div>₹{price}</div>
    </div>
  );
}

export default LabelPrice;
