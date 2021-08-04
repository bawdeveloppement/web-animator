import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./todo-list-component";

const TodoListCreatorComponent = () => {
    const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({target: {value}}) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Ajouter</button>
    </div>
  );
}

// utilitaire pour créer un identifiant unique
let id = 0;
function getId() {
  return id++;
}

export default TodoListCreatorComponent;