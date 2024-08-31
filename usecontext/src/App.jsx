import React, { createContext } from 'react';
import './App.css';
import ChildA from './ChildA';

// Create context objects outside of the component
const data = createContext();
const data1 = createContext();

function App() {
  const name = "aditya";
  const gender = "male";
  
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
export { data, data1 };
