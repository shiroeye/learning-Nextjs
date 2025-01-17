"use client";
// import React, { useEffect, useState } from "react";
import useCounter from "@/hooks/useCounter";
import useBgBlue from "@/hooks/useBgBlue";

export default function InteractiveButton() {
  const { foo, countButton } = useCounter();
  useBgBlue();

  return (
    <div>
      <h1>{foo}</h1>
      <button className="bg-blue-500" onClick={countButton}>
        Button
      </button>
    </div>
  );
}
