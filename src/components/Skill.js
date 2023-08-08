import React from "react";

function Skill(props) {
  return (
    <div className="border border-gray-400 bg-orange-300 rounded px-5 pt-2 flex flex-row m-6 justify-center">
      <div className="text-gray-900 font-bold text-xl mb-2">{props.skill}</div>
    </div>
  );
}

export default Skill;
