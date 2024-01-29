import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { About } from './Pages/About';
import { Home } from './Pages/Home';
import { Contact } from './Pages/Contact copy';
import { NavBar } from './Pages/NavBar';
import { Profile } from './Pages/Profile';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState("Alishah")

  return (
    <div className='App'>
       <Router>
        <div>SarvinStyle</div>
        <NavBar/>

        <Routes>
          <Route path="/" element= {<Home username={username}/>}/>
          <Route path="/about" element= {<About/>}/>
          <Route path="/contact" element= {<Contact/>}/>
          <Route path="/profile" element= {<Profile username={username} setUsername={setUsername} />}/>
          <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
        <div>This is footer</div>
       </Router>
    </div>
  )
}
 
export default App;
