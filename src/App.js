import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { About } from './Pages/About';
import { Home } from './Pages/Home';
import { Contact } from './Pages/Contact copy';
function App() {

  return (
    <div className='App'>
       <Router>
        <div>SarvinStyle</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/about" element= {<About/>}/>
          <Route path="/contact" element= {<Contact/>}/>
          <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
       </Router>
    </div>
  )
}
 
export default App;
