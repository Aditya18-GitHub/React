import {useState,useContext} from 'react';

import UserContext from '../context/UserContext';

function Login() {
    const [username,setusername] = useState('')
    const [pass,setpass] = useState('')
    

    const {setuser} = useContext(UserContext)


    const handlesubmit = (e) =>{
            e.preventDefault()
            setuser({username,pass})
            
    }


    return (
        <div>
            <h2>Login</h2>
            <input type="text" 
            value={username} 
            onChange={(e) => setusername(e.target.value)}
            placeholder='username'/>


            {"   "}
            <input type="text" 
            value={pass}
            onChange={(e) => setpass(e.target.value)}
            placeholder='password'/>




            <button onClick={handlesubmit}>Submit</button>
        </div>
    );
}

export default Login;