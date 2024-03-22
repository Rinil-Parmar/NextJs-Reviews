"use client";

import { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

export default function ShareLinkButton() {
  const [cliecked, setClicked] = useState(false);
  const handleClick = () => {
    // console.log("Clicked!");
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };
  console.log("Rendering ShareLinkButton", cliecked);

  return (
    <button
      onClick={handleClick}
      className="flex gap-1 items-center bg-blue-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mb-3 "
    >
      <LinkIcon className="h-4 w-4" />
      {cliecked ? "Share Link Copied!" : "Share Link"}
    </button>
  );
}
