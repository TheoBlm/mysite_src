import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="https://www.linkedin.com/in/th%C3%A9o-bloume-030749232/?originalSubdomain=fr"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/theoblm" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
