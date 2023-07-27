import React from "react";
import styles from "../styles";

const Footer = () => {
  return (
    <div className="border-y-2 border-black">
      <div
        className="flex flex-row flex-1 justify-center gap-x-4 lg:gap-x-20 items-center"
        id="footer"
      >
        <h1 className="font-bold font-tertiary">Arpit Jethava</h1>
        <p className="font-bold font-tertiary">
          &copy; 2023 All Rights Reserved
        </p>
      </div>
    </div>
  );
};
export default Footer;
