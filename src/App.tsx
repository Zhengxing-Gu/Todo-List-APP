import Form from "./components/Form";
import Todo from "./components/Todo";
import {
  collection,
  onSnapshot,
  query,
  deleteDoc,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";

import { useState, useEffect } from "react";
import { db } from "./components/Firebase";

import { TodoType } from "./types";

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [input, setInput] = useState("");

  // CREATE TODO
  const createTodo: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("please enter some tasks");
      return;
    }

    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  // READ TODO
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosArray: TodoType[] = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsubscribe();
  }, []);

  // UPDATE TODO

  // mark complete or not
  const toggleComplete = async (todo: TodoType) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  // DELETE TODO
  const deleteTodo = async (id: string) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className="h-screen w-screen p-4 bg-teal-300 overflow-y-scroll">
      <div
        className="bg-slate-100 max-w-[500px] w-full 
      m-auto rounded-md shadow-xl p-4"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 p-1">
          Todo List
        </h1>
        <Form createTodo={createTodo} input={input} setInput={setInput} />
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
        {todos.length > 0 && (
          <p className="text-center">{`You have ${todos.length} things to complete`}</p>
        )}
      </div>
    </div>
  );
};

export default App;
