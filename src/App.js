import { useEffect, useState } from "react"
import './App.css';
import Course from "./Course";
import Axios from 'axios';
function App() {
  const [predicteResult, setPredicteResult] = useState('');
  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res)=>{
      setPredicteResult(res.data[0].excuse)
    })
  }
  return (
    <div className="App">
      <h1>Generate an excuse</h1>
      <button onClick={()=>fetchExcuse('party')}> party</button>
      <button onClick={()=>fetchExcuse('family')}>family</button>
      <button onClick={()=>fetchExcuse('office')}>office</button>
      <h1> excuse is: {predicteResult}</h1>
    </div>
  )
}

export default App;
