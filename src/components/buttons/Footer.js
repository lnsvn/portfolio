import React from "react";

export default function FooterButton(props) {
  return <button href={props.link}>{props.title}</button>;
}