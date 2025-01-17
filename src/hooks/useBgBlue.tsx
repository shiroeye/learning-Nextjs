"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useBgBlue() {
  const router = useRouter();
  console.log(router);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
}
