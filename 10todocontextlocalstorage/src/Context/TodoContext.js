import { createContext, useContext } from 'react';

// Default values for the context
const defaultContextValue = {
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {}
};

// Create the context with default values
export const TodoContext = createContext(defaultContextValue);

// Export the provider component
export const Todoprovider = TodoContext.Provider;

// Custom hook to use the context
export const useTodo = () => useContext(TodoContext);




