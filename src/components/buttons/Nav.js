import React from "react";

export default function NavButton(props) {
  return <button href={props.title}>{props.title}</button>;
}
