import './App.css';
import React, { createContext } from 'react';
import ChildA from './ChildA'; // Corrected import path

const data = createContext();

function App() {
  const name = "aditya";

  return (
    <data.Provider value={name}>
      <ChildA />
    </data.Provider>
  );
}

export default App;
export { data };
