import React from "react";

export default function FooterButton(props) {
  return <a href={props.link} className="hover:text-slate-300 hover:underline">{props.title}</a>;
}