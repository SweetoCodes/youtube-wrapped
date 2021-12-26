import React from "react";

export default function Producthunt(props) {
  return (
    <a
    target="_blank"
    href={"https://www.charliesweeting.com/"}
    rel="noopener noreferrer"
  >
    <svg
      className={props.style}
      xmlns="http://www.w3.org/2000/svg"
      width="51"
      height="51"
      fill="none"
      viewBox="0 0 51 51"
    >
      <g clipPath="url(#clip0_9_177)">
        <path
          fill="#DA552F"
          d="M50.507 25.5c0 13.812-11.188 25-25 25C11.693 50.5.505 39.314.505 25.5s11.188-25 25-25 25 11.188 25 25"
        ></path>
        <path
          fill="#fff"
          d="M28.84 25.5h-7.085v-7.48h7.084a3.763 3.763 0 013.752 3.751 3.761 3.761 0 01-3.752 3.752V25.5zm0-12.477H16.753v25h5.001v-7.5h7.084a8.75 8.75 0 008.75-8.75 8.75 8.75 0 00-8.75-8.75z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_9_177">
          <path
            fill="#fff"
            d="M0 0H50V50H0z"
            transform="translate(.5 .5)"
          ></path>
        </clipPath>
      </defs>
    </svg>
    </a>
  );
}
