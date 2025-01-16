"use client";
import React, { useEffect, useState } from "react";

export default function InteractiveButton() {
  // Destructuring 分割代入
  const [foo, setFoo] = useState(0);
  console.log("foo1 is now", foo);

  useEffect(() => {
    console.log("foo value updated to:", foo);
  }, [foo]);

  function countButton() {
    setFoo((f) => f + 1);
    console.log("foo2 is now", foo);
  }
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <h1>{foo}</h1>
      <button className="bg-blue-500" onClick={countButton}>
        Button
      </button>
    </div>
  );
}
