import React from "react";

export default function FooterButton(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="hover:text-orange-100 hover:underline"
    >
      {props.title}
    </a>
  );
}
