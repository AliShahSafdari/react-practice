import {useEffect, useState} from "react"
import './App.css';
import Text from "./Text"; 

function App() {
  const [showText, setShowText] = useState(false);
  useEffect(()=>{
    console.log("component did mount");
  },[])
  return(
   <div className="App">
    <button onClick={()=> setShowText(!showText)}> showText</button>
    {showText && <Text/>}
  
   </div>
  )
}
 
export default App;
