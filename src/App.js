import {useState} from "react"
import './App.css';
import Course from "./Course";

function App() {
  fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data)=>{
    console.log(data);
  });

  return (
    <div className="App">
      <button>fetch data</button>
      <p></p>
    </div>
  )
}
 
export default App;
