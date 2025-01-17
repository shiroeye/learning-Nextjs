"use client";
import useArrayList from "@/hooks/useArrayList";

export default function ArrayState() {
  const { Array, addArray } = useArrayList();

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

  状態管理
  状態(state)を更新するときに、破壊的メソッドではなくスプレッド演算子を使用して参照を変更する必要がある。
  これによって、Reactの再レンダリングがトリガーされる。
*/
