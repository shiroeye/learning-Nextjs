"use client";
import { useEffect } from "react";

export default function InteractiveButton() {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    console.log("Changed background color to lightblue");

    return () => {
      document.body.style.backgroundColor = "";
      console.log("Changed background color to default");
    };
  }, []);
  return (
    <button
      className="bg-red-500"
      onClick={(e) => {
        console.log(e.target);
        alert("Hello!!");
      }}
    >
      Button
    </button>
  );
}
