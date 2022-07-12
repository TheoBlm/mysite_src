/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState, useEffect } from "react";
import "./lightNav.css";

import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const LightNav = () => {
  const [activeLight, setActiveLight] = useState("light");

  function changeTheme(mode) {
    if (mode === "light") {
      document.documentElement.style.setProperty("--bg", "var(--bg-sky)");
      // document.documentElement.style.setProperty("--color-primary", "#9e68cb");
      document.documentElement.style.setProperty(
        "--color-bg-transparent",
        "#512c6c75"
      );
    }
    if (mode === "dark") {
      document.documentElement.style.setProperty("--bg", "var(--bg-dark)");
      document.documentElement.style.setProperty("--color-primary", "#af4dff");
      document.documentElement.style.setProperty(
        "--color-bg-transparent",
        "transparent"
      );
    }
  }
  useEffect(() => {
    changeTheme(activeLight);
  }, [activeLight]);
  return (
    <nav className="lightNav__container">
      {" "}
      <a
        onClick={() => {
          console.log("dark");
          setActiveLight("dark");
        }}
        className={`
  text-right
  ${activeLight === "dark" ? "active" : ""}
  ${"dark"}
`}
      >
        <MdDarkMode />
      </a>
      <a
        onClick={() => {
          setActiveLight("light");
        }}
        className={`
      text-right
      ${activeLight === "light" ? "active" : ""}
      ${"light"}
`}
      >
        <MdLightMode />
      </a>
    </nav>
  );
};

export default LightNav;
