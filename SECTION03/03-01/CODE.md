## 서버 컴포넌트

```tsx
export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = await res.json();
  return (
    <>
      <pre>{JSON.stringify(todo, null, 2)}</pre>
    </>
  );
}
```

## 클라이언트 컴포넌트

```tsx
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
```
