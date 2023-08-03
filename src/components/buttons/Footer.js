import React from "react";

export default function FooterButton(props) {
  return <a href={props.link}>{props.title}</a>;
}