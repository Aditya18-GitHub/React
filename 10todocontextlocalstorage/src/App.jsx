import { useEffect, useState } from 'react';
import { Todoprovider } from './Context';
import './App.css';
import Todoform from './Components/Todoform';
import Todoitems from './Components/Todoitems';

function App() {
    const [todos, settodos] = useState([]);



    const addTodo = (todo) => {
      settodos((prev) => [{ ...todo }, ...prev]);
      console.log(todo.todo);
    };


    const updateTodo = (id, updatedTodo) => {
      settodos((prev) =>
        prev.map((prevtodo) =>
          prevtodo.id === id ? { ...prevtodo, ...updatedTodo } : prevtodo
        )
      );
    };


    const deleteTodo = (id) => {
      settodos((prev) => prev.filter((todo) => todo.id !== id));
    };


    const toggleComplete = (id) => {
      settodos((prev) =>
          prev.map((prevtodo) =>
            prevtodo.id === id
              ? {...prevtodo, completed: !prevtodo.completed }
              : prevtodo
          )
      );
    };


      useEffect(() => {
          
          const todovar = JSON.parse(localStorage.getItem('todos')) ;
          if(todovar && todovar.length > 0) settodos(todovar);
        
      }, []);


      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);


  return (
    <Todoprovider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              <Todoform />
            </div>
          <div className="flex flex-wrap gap-y-3">
              {todos.map((todoele) => (
                <div key={todoele.id} className="w-full">
                    <Todoitems todoele={todoele} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}


export default App;
