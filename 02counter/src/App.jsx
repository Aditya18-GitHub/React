import { useState } from 'react'

import './App.css'

function App() {
  
    // let counter = 15

    let [cnt ,setcnt] = useState(15);

      const addvalue = () =>{
        //counter = counter + 1;
        //   if(cnt == 10) return;
        // setcnt(cnt+1);


          setcnt(cnt => cnt+1);
          setcnt(cnt => cnt+1);
          setcnt(cnt => cnt+1);
          setcnt(cnt => cnt+1);
         
      }

      const subvalue = () =>{
          if(cnt == 0) return ;
          setcnt(cnt-1);
          console.log("value sub",cnt);
      }

  return (
        <>

            <h1>chai aur react</h1>
            <h2>counter value {cnt}</h2>
            <button onClick={addvalue}>Add value {cnt}</button>
            <br/>
            <button onClick={subvalue}>Remove value {cnt}</button>
            <p>footer : {cnt}</p>


        </>
  )
}

export default App
