import React, { useState } from 'react';
import { useTodo } from '../Context';

function Todoitems({ todoele }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todoele.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
      updateTodo(todoele.id, { todo: todoMsg });
      setIsTodoEditable(false);
  };

  const togglecom = () => {
      toggleComplete(todoele.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todoele.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'
      }`}
    >

      <input
          type="checkbox"
          className="cursor-pointer"
          checked={todoele.completed}
          onChange={togglecom}
      />

      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? 'border-black/10 px-2' : 'border-transparent'
        } ${todoele.completed ? 'line-through' : ''}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todoele.completed) return;

          if (isTodoEditable) editTodo();
            
          else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todoele.completed}
      >
        {isTodoEditable ? '📁' : '✏️'}
      </button>

      
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todoele.id)}
      >
        ❌
      </button>
      
    </div>
  );
}

export default Todoitems;
