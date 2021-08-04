import { atom, useRecoilValue } from "recoil";
import TodoItemComponent from "./todo-item-component";
import TodoListCreatorComponent from "./todo-list-creator-component";

export const todoListState = atom({
    key: 'todoListState',
    default: [],
});

const TodoListComponent = () => {
    const todoList = useRecoilValue(todoListState);
    return (
        <>
            {/* <TodoListStats /> */}
            {/* <TodoListFilters /> */}
            <TodoListCreatorComponent />

            {todoList.map((todoItem) => (
                <TodoItemComponent key={todoItem.id} item={todoItem} />
            ))}
        </>
    );
};

export default TodoListComponent;