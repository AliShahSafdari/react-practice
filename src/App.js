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
  const deleteCourse = (courseName)=>{
   const newCourseList=  courseList.filter((course) =>{
    if(course === courseName) return false;
    else return true;
   })
   setCourseList(newCourseList);
  }
  return (
    <div className='App'>
      <div className='add-course'>
        <input type='text' onChange={handelChange}></input>
        <button onClick={addcourse}>Add Course</button>
      </div>
      <div className='list'>
        {courseList.map((course)=>{
          return (<div>
            <h1>{course}</h1>
            <button onClick={() => deleteCourse(course)}>X</button>
          </div>)
        })}
      </div>
    </div>
  )
}
 
export default App;
