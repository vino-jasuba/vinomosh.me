import React from "react";
import TechnologyStackCard from "../components/TechnologyStackCard";
import VincentFaceShot from "../assets/images/vincent2.jpeg";
import ExternalLink from "../components/ExternalLink";
import SocialIcons from "../components/SocialIcons";

const technologies = [
  {
    category: "php",
    name: "Laravel",
    summary:
      "The framework for web artisans and my goto tool for build amazing web solutions without sweating the small things",
    stars: "",
  },
  {
    category: "javascript",
    name: "React.Js",
    summary:
      "I turn to React.Js when adding rich interactivity to web applications",
    stars: "",
  },
  {
    category: "containerd",
    name: "Docker",
    summary: "Containerizing applications since 2018",
    stars: "",
  },
  {
    category: "cloud",
    name: "AWS",
    summary:
      "Leveraging the rich ecosystem of AWS services for reliable application deployments",
    stars: "",
  },
  {
    category: "php",
    name: "Laravel",
    summary:
      "The framework for web artisans and my goto tool for build amazing web solutions without sweating the small things",
    stars: "",
  },
  {
    category: "javascript",
    name: "React.Js",
    summary:
      "I turn to React.Js when adding rich interactivity to web applications",
    stars: "",
  },
  {
    category: "containerd",
    name: "Docker",
    summary: "Containerizing applications since 2018",
    stars: "",
  },
  {
    category: "cloud",
    name: "AWS",
    summary:
      "Leveraging the rich ecosystem of AWS services for reliable application deployments",
    stars: "",
  },
];

export default function Index() {
  return (
    <div className="relative text-white relative">
      <div className="fixed left-0 h-screen p-32 flex flex-col">
        <div>
          <h1 className="text-4xl">You&apos;ve reached</h1>
          <h1 className="text-6xl">Vincent Omondi.</h1>
        </div>
        <div className="text-dawn mt-8 max-w-lg">
          I’m a Software Engineer currently working as consultant Backend
          Engineer for the Squad at{" "}
          <ExternalLink to="https://ibuild.global">iBUILD</ExternalLink>. I
          mostly do API development, and I’m a{" "}
          <ExternalLink to="https://laravel.com">Laravel</ExternalLink>{" "}
          evangelist. I take every opportunity I get to remind everyone that PHP
          is not{" "}
          <ExternalLink to="https://kinsta.com/blog/is-php-dead/">
            dead
          </ExternalLink>
          . I also dabble in front-end development and I absolutely love pairing{" "}
          <ExternalLink to="https://tailwindcss.com/">Tailwindcss</ExternalLink>{" "}
          with <ExternalLink to="https://reactjs.org">React.Js</ExternalLink>
        </div>
        <div className="flex mt-72">
          <img
            className="w-16 object-cover rounded-full"
            src={VincentFaceShot}
            alt="Vincent Odhiambo's Headshot"
          />
          <SocialIcons />
        </div>
      </div>
      <div className="static absolute right-0 p-32 w-1/2">
        {technologies.map((technology) => (
          <TechnologyStackCard technology={technology} />
        ))}
      </div>
    </div>
  );
}
