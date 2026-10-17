import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";
import Input from "./html/Input";
import React, { useState } from "react";

export default React.memo(function TodoListItem({
  todo,
  updateTodo,
  toggleTodo,
  deleteTodo,
}: {
  todo: Todo;
  updateTodo: (id: string, title: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}) {
  console.log("TodoListItem Render");
  // 수정시 두 가지 상태값 필요
  // 1. 수정 여부를 판단하는 상태값
  const [isEditing, setIsEditing] = useState<boolean>(false);
  //  2. 수정할할 내용을 담는 상태값
  const [editedTitle, setEditedTitle] = useState<string>("");

  // 수정 버튼 클릭 시, 수정하기 기능
  const updateHandler = () => {
    if (editedTitle.trim() !== "" && editedTitle !== todo.title) {
      updateTodo(todo.id, editedTitle);
    }
    setIsEditing((isEditing) => !isEditing);
    setEditedTitle(editedTitle === todo.title ? todo.title : editedTitle);
  };

  return (
    // 할 일이 완료되면 .todo__item--complete 추가
    <li className={`todo__item ${todo.completed && "todo__item--complete"}`}>
      {!isEditing && (
        <Checkbox
          parentClassName="todo__checkbox-group"
          type="checkbox"
          className="todo__checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        >
          {todo.title}
        </Checkbox>
      )}
      {isEditing && (
        <Input
          type="text"
          className="todo__modify-input"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      )}
      <div className="todo__button-group">
        <Button className="todo__action-button" onClick={updateHandler}>
          <SvgPencil />
        </Button>
        <Button
          className="todo__action-button"
          onClick={() => deleteTodo(todo.id)}
        >
          <SvgClose />
        </Button>
      </div>
    </li>
  );
});
