import { useEffect, useState } from "react"
import './App.css';
import Course from "./Course";
import Axios from 'axios';
function App() {
  const [name, setName]= useState("");
  const [predicteResult, setPredicteResult] = useState({});
  const fetchAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data);
      setPredicteResult(res.data);
    })
  }
  return (
    <div className="App">
      <input placeholder="ex. ali..." onChange={(event)=> setName(event.target.value)}></input>
      <button onClick={fetchAge}>Predict age</button>
      <h1>age is: {predicteResult?.age}</h1>
      <h1>name is: {predicteResult?.name}</h1>
      <h1>count is: {predicteResult?.count}</h1>
    </div>
  )
}

export default App;
