import { useState } from "react";
import Button from "./html/Button";
import Input from "./html/Input";

export default function TodoEditor({
  addTodo,
}: {
  addTodo: (title: string) => void;
}) {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 이벤트 취소
    if (text.trim() === "") return; // 공백이면 추가하지 않음
    addTodo(text); // 할 일 추가
    setText("");
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <div className="todo__editor">
        <Input
          type="text"
          className="todo__input"
          placeholder="Enter Todo List"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button className="todo__button" type="submit">
          Add
        </Button>
      </div>
    </form>
  );
}
