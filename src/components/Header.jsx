import React from "react";

const Header = ({ message }) => {
  return (
    <div
      style={{
        height: "80px",
        backgroundColor: "#c59771bd",
        color: "#1c4f1d",
        padding: "32px 32px",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: "27px",
        fontFamily: "'Helvetica', 'Arial', sans-serif",
      }}
    >
      {message}
    </div>
  );
};

export default Header;
