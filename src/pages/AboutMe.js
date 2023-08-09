import React from "react";
import me from "../images/me.jpg";
import FadeIn from "../components/animations/FadeIn";
import ZoomIn from "../components/animations/ZoomIn";

function AboutMe() {
  return (
    <main className="flex flex-col items-center font-rem font-bold py-8">
      <h1 className="text-3xl mb-7">About Me</h1>
      <FadeIn>
        <img
          alt="lauren-sullivan"
          className="w-52 h-52 rounded mb-7"
          src={me}
        ></img>
      </FadeIn>
      <ZoomIn>
        <p className="mb-7 text-center">Hello</p>
        <p className="px-28 mb-7 text-center">
          My name is Lauren. I am an aspiring Full-Stack Web Developer. I
          graduated from the UCONN Coding Bootcamp in July 2023. Take a look at
          my top projects displayed in the portfolio page. You will find links
          to the deployed applications and the corresponding GitHub
          repositories. Feel free to contact me with any questions or comments.
          You can also check out my GitHub, Indeed, or Twitter below.
        </p>
        <p className="px-28 text-center">
          Outside of web development, my interests include photography, design,
          and reading.
        </p>
      </ZoomIn>
    </main>
  );
}

export default AboutMe;
