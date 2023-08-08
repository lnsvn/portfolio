import React from "react";
import Skill from "../components/Skill";
import skills from "../constants/skills";
import resume from "../pdf/Lauren-sullivan-resume.pdf";

function Resume() {
  const skillsDataFE = skills.map((skill) => {
    return skill.frontEnd.map((feSkill) => {
      return (
        <li key={feSkill}>
          <Skill skill={feSkill} />
        </li>
      );
    });
  });

  const skillsDataBE = skills.map((skill) => {
    return skill.backEnd.map((beSkill) => {
      return (
        <li key={beSkill}>
          <Skill skill={beSkill} />
        </li>
      );
    });
  });

  return (
    <main className="flex flex-col items-center font-rem font-bold py-8">
      <h1 className="text-3xl mb-5">Resume</h1>
      <a
        href={resume}
        target="_blank"
        rel="noreferrer"
        className="flex justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-5"
      >
        View my resume
      </a>
      <div className="flex flex-row">
        <div className="flex flex-col items-center">
          <h3 className="text-xl">Front-end</h3>
          <ul className="flex flex-col mx-5">{skillsDataFE}</ul>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl">Back-end</h3>
          <ul className="flex flex-col mx-5">{skillsDataBE}</ul>
        </div>
      </div>
    </main>
  );
}

export default Resume;
