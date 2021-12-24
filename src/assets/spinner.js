import React from "react";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <div className=" animate-spin rounded-full h-20 w-20 border-b-4 border-white"></div>
    </div>
  );
}
