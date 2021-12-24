import React from "react";

export default function Arrow(props) {
  return (
    <svg
    className={props.style}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill="#F2F2F2"
        d="M8.75 1.75a.866.866 0 00-1.225 1.225L10.5 5.95a.103.103 0 01-.072.175H.874a.875.875 0 100 1.75h9.553c.09 0 .137.11.072.175l-2.975 2.975A.866.866 0 008.75 12.25l4.543-4.543a1 1 0 000-1.414L8.75 1.75z"
      ></path>
    </svg>
  );
}