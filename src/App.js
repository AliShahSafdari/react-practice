import {useState} from "react"
import './App.css';

function App() {
  const [courseList, setCourseList] = useState([]);
  const [newCourse, setNewCourse] = useState("");
  const handelChange = (event) =>{
    setNewCourse(event.target.value);
  }
  const addcourse = ()=> {
    setCourseList([...courseList, newCourse]);
  }
  return (
    <div className='App'>
      <div className='add-course'>
        <input type='text' onChange={handelChange}></input>
        <button onClick={addcourse}>Add Course</button>
      </div>
      <div className='list'>
        {courseList.map((course)=>{
          return <h1>{course}</h1>
        })}
      </div>
    </div>
  )
}
 
export default App;
