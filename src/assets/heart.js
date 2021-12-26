import React from "react";

export default function Heart(props) {
  return (
    <svg
      className={props.style}
      xmlns="http://www.w3.org/2000/svg"
      width="63"
      height="55"
      fill="none"
      viewBox="0 0 63 55"
    >
      <path
        stroke="#FFF8F8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.893 6.287a15 15 0 000 21.213L31.5 53.107 57.107 27.5A15 15 0 0035.893 6.287L31.5 10.68l-4.393-4.393a15 15 0 00-21.214 0v0z"
      ></path>
    </svg>
  );
}
