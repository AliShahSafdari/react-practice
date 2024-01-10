import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { About } from './Pages/About';
import { Home } from './Pages/Home';
import { Contact } from './Pages/Contact copy';
import { NavBar } from './Pages/NavBar';
import { Profile } from './Pages/Profile';
function App() {

  return (
    <div className='App'>
       <Router>
        <div>SarvinStyle</div>
        <NavBar/>

        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/about" element= {<About/>}/>
          <Route path="/contact" element= {<Contact/>}/>
          <Route path="/profile/:name?" element= {<Profile/>}/>
          <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
       </Router>
    </div>
  )
}
 
export default App;
