"use client";
import { useCallback, useState } from "react";

export default function ArrayState() {
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

  return (
    <div>
      <button className="bg-blue-600" onClick={addArray}>
        Number追加
      </button>
      <ul>
        {Array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
/*メモ
  useStateの型定義↓
  function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
*/
