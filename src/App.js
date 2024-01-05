import { useState} from "react"
import './App.css';
import Text from "./Text"; 

function App() {
  const [showText, setShowText] = useState(false);
  
  return(
   <div className="App">
    <button onClick={()=> setShowText(!showText)}> showText</button>
    {showText && <Text/>}
  <button>new </button>
   </div>
  )
}
 
export default App;
