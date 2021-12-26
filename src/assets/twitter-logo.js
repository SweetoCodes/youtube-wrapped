import React from "react";

export default function Twitter(props) {
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
      <g clipPath="url(#clip0_9_174)">
        <path
          fill="#fff"
          d="M50.5 9.994a20.48 20.48 0 01-5.892 1.614 10.274 10.274 0 004.51-5.675 20.548 20.548 0 01-6.514 2.49 10.24 10.24 0 00-7.487-3.24c-6.623 0-11.49 6.18-9.994 12.594C16.6 17.35 9.042 13.267 3.98 7.06c-2.687 4.61-1.393 10.642 3.173 13.696a10.213 10.213 0 01-4.644-1.283c-.112 4.752 3.294 9.198 8.228 10.187a10.28 10.28 0 01-4.634.175 10.266 10.266 0 009.584 7.123A20.625 20.625 0 01.5 41.208a29.039 29.039 0 0015.725 4.609c19.046 0 29.806-16.086 29.156-30.513a20.884 20.884 0 005.119-5.31z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_9_174">
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
