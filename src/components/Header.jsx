import React from "react";

const Header = ({ message }) => {
  return (
    <div
      style={{
        height: "50px",
        backgroundColor: "#c59771bd",
        color: "#1c4f1d",
        padding: "16px 32px",
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      {message}
    </div>
  );
};

export default Header;
