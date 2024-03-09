import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

import { TodoType } from "../types";

interface TodoProps {
  todo: TodoType;
  deleteTodo: (id: string) => void;
  toggleComplete: (todo: TodoType) => void;
}

const Todo = ({ todo, deleteTodo, toggleComplete }: TodoProps) => {
  return (
    <li className="p-2 bg-teal-300 my-2 rounded-md shadow-sm">
      <div className="flex items-center justify-between">
        <p
          className={`text-grey-700 ${
            todo.completed ? "line-through opacity-20" : ""
          }`}
        >
          {todo.text}
        </p>
        <div className="flex gap-3">
          <button onClick={() => toggleComplete(todo)}>
            <CheckIcon />
          </button>
          <button onClick={() => deleteTodo(todo.id)}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Todo;
