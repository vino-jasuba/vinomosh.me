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
    summary: "How can anybody not like React?",
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
      "Experienced in leveraging the rich ecosystem of AWS services for reliable application deployments",
    stars: "",
  },
];

export default function Index() {
  return (
    <div className="text-white lg:relative max-w-1920px">
      <div className="left-0 sm:static md:static sm:px-8 sm:pt-12 md:px-16 md:pt-12 lg:h-screen lg:px-56 lg:pt-48 lg:flex lg:flex-col lg:fixed">
        <div className="p-8 lg:p-0">
          <h1 className="text-2xl md:px-8 lg:text-4xl">You&apos;ve reached</h1>
          <h1 className="text-3xl md:px-8 lg:text-6xl">Vincent Omondi.</h1>
        </div>
        <div className="p-8 text-dawn text-sm leading-relaxed tracking-wider lg:p-12 lg:mt-8 max-w-lg">
          I’m a Software Engineer currently working as consultant Backend
          Developer for the Squad at{" "}
          <ExternalLink to="https://ibuild.global">iBUILD</ExternalLink>. I
          mostly do API development, and I’m a{" "}
          <ExternalLink to="https://laravel.com">Laravel</ExternalLink>{" "}
          evangelist. I take every opportunity I get to remind everyone that PHP
          is not{" "}
          <ExternalLink to="https://kinsta.com/blog/is-php-dead/">
            dead
          </ExternalLink>
          . I also dabble in front-end development and I absolutely love pairing{" "}
          <ExternalLink to="https://tailwindcss.com/">
            Tailwind CSS
          </ExternalLink>{" "}
          with <ExternalLink to="https://reactjs.org">React.Js</ExternalLink>.{" "}
          Drop me an{" "}
          <ExternalLink to="mailto:ovincent7949@gmail.com">email</ExternalLink>{" "}
          if you think we're a good fit or if you just want to listen to me talk
          about{" "}
          <ExternalLink to="https://www.google.com/search?q=one+piece">
            One Piece
          </ExternalLink>
        </div>
        <div className="p-8">
          <div className="flex">
            <img
              className="w-16 h-16 object-cover rounded-full"
              src={VincentFaceShot}
              alt="Vincent Odhiambo's Headshot"
            />
            <SocialIcons />
          </div>
          <div className="mt-8 text-xs text-dawn leading-loose">
            <div>
              Inspired by{" "}
              <ExternalLink to="https://sarahdayan.dev/">
                Sarah Dayan.
              </ExternalLink>{" "}
            </div>
            <div>
              Original Design by{" "}
              <ExternalLink to="https://dribbble.com/NicolasMzrd">
                Nicolas Meuzard.
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
      <div className="static flex justify-center sm:mt-8 md:mt-0 lg:absolute md:right-0 w-full lg:w-1/2 lg:pr-56 lg:pt-48">
        <div className="mt-8 mx-8 md:mt-0 md:w-full md:px-8 fade-group">
          {technologies.map((technology) => (
            <TechnologyStackCard technology={technology} />
          ))}
        </div>
      </div>
      <div className="z-20 bottom-0 w-full h-16 sticky gradient-fade lg:hidden"></div>
    </div>
  );
}
