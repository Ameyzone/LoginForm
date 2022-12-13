import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register} from "./Register"

function App() {
  const [currentform,setcurrentform] = useState('Login')

const toggleform = (formName) =>{
  setcurrentform(formName);
}

  return (
    <div className="App">
      {
        currentform === "Login" ? <Login onformSwitch={toggleform}/> : <Register onformSwitch={toggleform}/>
      }
    
    </div>
  );
}

export default App;
