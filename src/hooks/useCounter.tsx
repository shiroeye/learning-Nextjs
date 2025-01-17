import { useState, useEffect } from "react";

export default function useCounter() {
  //...
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
  return { foo, countButton };
}
