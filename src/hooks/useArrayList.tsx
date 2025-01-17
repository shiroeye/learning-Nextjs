import { useState, useCallback } from "react";

export default function useArrayList() {
  //...
  // useStateの型定義↓
  // function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  const [Array, setArray] = useState<number[]>([]);

  const addArray = useCallback(() => {
    console.log("Actived addArray()");
    setArray((prevArray) => {
      return [...prevArray, prevArray.length + 1];
      // return [...prevArray, 1];
    });
  }, []);
  return { Array, addArray };
}
