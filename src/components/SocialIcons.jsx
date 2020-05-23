import React from "react";
import TwitterIcon from "../assets/twitter.svg";
import GithubIcon from "../assets/github.svg";
import ExternalLinkIcon from "../assets/external-link.svg";

export default function SocialIcons() {
  return (
    <>
      <a
        href="https://twitter.com/_jasuba"
        target="_blank"
        rel="noopener noreferrer"
        className="flex ml-6 sm:ml-12 items-center"
      >
        <img className="w-4" src={TwitterIcon} alt="twitter icon" />
        <span className="mx-2">Twitter</span>
        <img className="w-4" src={ExternalLinkIcon} alt="go to twitter" />
      </a>
      <a
        href="https://github.com/vino-jasuba"
        target="_blank"
        rel="noopener noreferrer"
        className="flex ml-6 sm:ml-12 items-center"
      >
        <img className="w-4" src={GithubIcon} alt="github icon" />
        <span className="mx-2">GitHub</span>
        <img className="w-4" src={ExternalLinkIcon} alt="go to github" />
      </a>
    </>
  );
}
