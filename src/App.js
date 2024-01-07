import {useState} from "react"
import './App.css';
import Course from "./Course";
import Axios from 'axios';
function App() {
  fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data)=>{
    console.log(data);
  });

  Axios.get('https://catfact.ninja/fact').then((res) => {
    console.log(res);
  })

  return (
    <div className="App">
      <button onClick={fetch}>fetch data</button>
      <p></p>
    </div>
  )
}
 
export default App;
