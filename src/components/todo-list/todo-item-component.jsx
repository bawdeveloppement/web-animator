import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { removeItemAtIndex, replaceItemAtIndex } from "../../utils";
import { todoListState } from "./todo-list-component";

const TodoItemComponent = ({item}) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);
  
    const editItemText = ({target: {value}}) => {
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        text: value,
      });
  
      setTodoList(newList);
    };
  
    const toggleItemCompletion = () => {
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        isComplete: !item.isComplete,
      });
  
      setTodoList(newList);
    };
  
    const deleteItem = () => {
      const newList = removeItemAtIndex(todoList, index);
  
      setTodoList(newList);
    };
  
  
    return (    <div>
        <input type="text" value={item.text} onChange={editItemText} />
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={toggleItemCompletion}
        />
        <button onClick={deleteItem}>X</button>
      </div>);
}

export default TodoItemComponent;