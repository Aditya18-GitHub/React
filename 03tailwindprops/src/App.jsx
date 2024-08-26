import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './Components/Card'
function App() {



  let Myobj = {
    name: "John",
    age:28
  }




  let newarr = [1,2,3];



  return (
    <>
          <h1 className='bg-green-500 text-black p-4 rounded-2xl mb-4'>Tailwind Test</h1>

          {/* <Card username = "chaiaurcode"  someobj = {newarr}  /> */}
          {/* <Card username = "chaiaurcode" someobj = {Myobj}/> */}
          <Card username = "chaiaurcode" btntext = "click here"/> 
          {/* <Card username = "chaiaurreact" btntext = "profile here"/> */}
          <Card username = "chaiaurreact" />
    </>
  )
}

export default App
