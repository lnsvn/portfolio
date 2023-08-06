import React from "react";

export default function Project(props) {
  return (
    <div className="border border-gray-400  bg-white rounded p-5 flex flex-row m-6">
      <img className="w-36 h-36 mr-4" src={props.image} alt={props.title}></img>
      <div className="flex flex-col">
        <div className="text-gray-900 font-bold text-xl mb-2">
          {props.title}
        </div>
        <p className="text-gray-700 text-base mb-6">{props.description}</p>
        <div className="flex items-center justify-evenly">
          <a href={props.repoLink}>Repo</a>
          <a href={props.appLink}>App</a>
        </div>
      </div>
    </div>
  );
}
