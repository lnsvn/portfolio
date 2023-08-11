import React from "react";
import Pulse from "./animations/Pulse";
import ZoomIn from "./animations/ZoomIn";

export default function Project(props) {
  return (
    <ZoomIn>
      <div className="border border-gray-400  bg-white rounded p-5 flex flex-row m-6">
        <img
          className="w-52 h-52 mr-4 rounded"
          src={props.image}
          alt={props.title}
        ></img>
        <div className="flex flex-col">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {props.title}
          </div>
          <p className="text-gray-700 text-base mb-6">{props.description}</p>
          <div className="flex items-center justify-evenly">
            <Pulse>
              <a href={props.repoLink} target="_blank" rel="noreferrer">
                Repo
              </a>
            </Pulse>
            <Pulse>
              <a href={props.appLink} target="_blank" rel="noreferrer">
                App
              </a>
            </Pulse>
          </div>
        </div>
      </div>
    </ZoomIn>
  );
}
