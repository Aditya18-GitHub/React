import {  useState ,useCallback, useEffect,useRef} from 'react'



function App() {
  
  const [lenght ,setlenght] = useState(8);
  const [numallowed ,setnumallowed] = useState(false);
  const [charallowed ,setcharallowed] = useState(false);
  const [password ,setpassword] = useState("")

  //ref hook
  const passwordref = useRef(null)




  const passwordgenrator = useCallback( () => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numallowed == true) str += "0123456789";
    if(numallowed == true) str += "!@#$%^&*()_-+=[]{}";

    for(let i = 1;i<=lenght;i++){
        let idx = Math.floor(Math.random() * str.length + 1)
        
        pass += str.charAt(idx);

    }

    setpassword(pass);

  } ,[lenght,numallowed,charallowed])   //ense agr koi change ho aur method dubara se run ho use optimised karo!

  
  
  useEffect(() => {
     passwordgenrator();
  }, [lenght,numallowed,charallowed,passwordgenrator])     //agr inme koi bhi chedchad ho to dobara se run kar do!


  const copypasstoclipboard = () => {
        passwordref.current?.select();
       //passwordref.current?.setSelectionRange(0,4);
        window.navigator.clipboard.writeText(password)
  }



  return (
    
          <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
                  <h1 className='text-4xl text-center text-white my-3'>Passowrd Generator</h1>
                  <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                            <input 
                              type="text" 
                              value = {password}
                              className='outline-none w-full py-1 px-3'
                              placeholder='password'
                              readOnly
                              ref={passwordref}
                            />
                            <button onClick={copypasstoclipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
                  </div>


                  <div className='flex text-sm gap-x-2'>
                        <div className='flex items-center gap-x-1'>
                                  <input 
                                    type="range"
                                    min={1}
                                    max={20}
                                    value={lenght}
                                    className='cursor-pointer'
                                    onChange={(e) => {setlenght(e.target.value)}}

                                  />
                                  <label >lenght :{lenght}</label>
                        </div>

                        <div className='flex items-center gap-x-1'>
                                  <input 
                                    type="checkbox"
                                    defaultChecked={numallowed}
                                    
                                    onChange={() => {
                                      setnumallowed((pre) => !pre)
                                    }}

                                  />
                                  <label >Number</label>

                                  
                        </div>

                        <div className='flex items-center gap-x-1'>
                                  <input 
                                    type="checkbox"
                                    defaultChecked={charallowed}
                                    

                                    onChange={() => {
                                      setcharallowed((pre) => !pre)
                                    }}

                                  />                                
                                  <label >Characters</label>
                        </div>


                  </div>

          </div>
          


    
  )
}

export default App
