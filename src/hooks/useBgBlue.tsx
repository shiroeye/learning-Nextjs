import { useEffect } from "react";

export default function useBgBlue() {
  //...
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
}
