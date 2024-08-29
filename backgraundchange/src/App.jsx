import { useState } from "react"


function App() {

  const [color,setcolor] = useState("brown")

  return (
            <div className="w-full h-screen relative flex flex-col justify-end" style={{background:color}}>

                <div className="bg-white mb-12 mx-[12rem] flex justify-center p-5 rounded-2xl gap-4 flex-wrap">

                 <button onClick={() => (setcolor("red"))} className="bg-red-800 py-1 px-6 text-white rounded-xl">Red</button>
                 <button onClick={() => (setcolor("green"))} className="bg-green-600 py-1 px-6 text-white rounded-xl">green </button>
                 <button onClick={() => (setcolor("blue"))} className="bg-blue-600 py-1 px-6 text-white rounded-xl">blue</button>
                 <button onClick={() => (setcolor("olive"))} className="bg-orange-700 py-1 px-6 text-white rounded-xl">olive</button>
                 <button onClick={() => (setcolor("grey"))} className="bg-gray-700 py-1 px-6 text-white rounded-xl">grey</button>
                 <button onClick={() => (setcolor("yellow"))} className="bg-yellow-500 py-1 px-6 text-white rounded-xl">yellow</button>
                 <button onClick={() => (setcolor("pink"))} className="bg-pink-600 py-1 px-6 text-white rounded-xl">pink</button>
                 <button onClick={() => (setcolor("purple"))} className="bg-purple-800 py-1 px-6 text-white rounded-xl">purple</button>
                 <button onClick={() => (setcolor("lavender"))} className="bg-lime-600 py-1 px-6 text-white rounded-xl">lavender</button>
                 <button onClick={() => (setcolor("white"))} className="bg-white py-1 px-6 text-black rounded-xl border-solid border-2 border-sky-500 ...">white</button>
                 <button onClick={() => (setcolor("black"))} className="bg-black py-1 px-6 text-white rounded-xl">black</button>
                 
                
                </div>
              

            </div>
  )
}

export default App
