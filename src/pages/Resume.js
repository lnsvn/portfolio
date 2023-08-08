import React from "react";
import Skill from "../components/Skill";
import skills from "../constants/skills";

function Resume() {
  const skillsDataFE = skills.map((skill) => {
    return skill.frontEnd.map((feSkill) => {
      return (
        <li>
          <Skill skill={feSkill} />
        </li>
      );
    });
  });

  const skillsDataBE = skills.map((skill) => {
    return skill.backEnd.map((beSkill) => {
      return (
        <li>
          <Skill skill={beSkill} />
        </li>
      );
    });
  });

  return (
    <main className="flex flex-col items-center font-rem font-bold py-8">
      <h1 className="text-3xl">Resume</h1>
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
