// nfce : next function component export
// layout.tsx의 chlderen 자리에 렌더링되는 페이지 컴포넌트
"use client";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);
  const increment = () => setCount((count) => count + 1);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
    </>
  );
}
