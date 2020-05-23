import React from "react";
import TwitterIcon from "../assets/twitter.svg";
import GithubIcon from "../assets/github.svg";
import ExternalLinkIcon from "../assets/external-link.svg";

export default function SocialIcons() {
  return (
    <>
      <div className="flex ml-4 sm:ml-12 items-center">
        <img className="w-4" src={TwitterIcon} alt="twitter icon" />
        <a
          href="https://twitter.com/_jasuba"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 mr-2"
        >
          Twitter
        </a>
        <img className="w-4" src={ExternalLinkIcon} alt="go to twitter" />
      </div>
      <div className="flex ml-4 sm:ml-12 items-center">
        <img className="w-4" src={GithubIcon} alt="github icon" />
        <a
          href="https://github.com/vino-jasuba"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 mr-2"
        >
          GitHub
        </a>
        <img className="w-4" src={ExternalLinkIcon} alt="go to github" />
      </div>
    </>
  );
}
