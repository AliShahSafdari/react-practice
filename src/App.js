import { useEffect, useState } from "react"
import './App.css';
import Course from "./Course";
import Axios from 'axios';
import axios from "axios";
function App() {
    const [catFact, setCatFact] = useState("");
    useEffect(() => {
      fetchData()
    },[]);
  const fetchData = () => {
    Axios.get('https://catfact.ninja/fact').then((res) => {
        console.log(res.data);
        setCatFact(res.data.fact);
      })
  }

  return (
    <div className="App">
      <button onClick={fetchData}>fetch data</button>
      <p>{catFact}</p>
    </div>
  )
}

export default App;
