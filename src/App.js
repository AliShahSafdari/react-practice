import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { About } from './Pages/About';
import { Home } from './Pages/Home';
import { Contact } from './Pages/Contact copy';
function App() {

  return (
    <div className='App'>
       <Router>
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/about" element= {<About/>}/>
          <Route path="/contant" element= {<Contact/>}/>
        </Routes>
       </Router>
    </div>
  )
}
 
export default App;
