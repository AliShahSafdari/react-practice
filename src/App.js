import {useState} from "react"
import './App.css';
import Course from "./Course";

function App() {
  const [courseList, setCourseList] = useState([]);
  const [newCourse, setNewCourse] = useState("");
  const handelChange = (event) =>{
    setNewCourse(event.target.value);
  }
  const addCourse = ()=> {
    const course = {
      id: courseList.length === 0 ? 1 :courseList[courseList.length-1].id +1,
      courseName : newCourse,
      isCompleted : false
    }
    setCourseList([...courseList, course]);
  }
  const deleteCourse = (courseId)=>{
   const newCourseList=  courseList.filter((course) => courseId !==course.id)
   setCourseList(newCourseList);
  }
  const completedCourse = (courseId) =>{
    const newCourseList = courseList.map((course) => {
      if( course.id === courseId) return{...course, isCompleted: !course.isCompleted}
      else return course
    })
   setCourseList(newCourseList);
  }

  return (
    <div className='App'>
      <div className='add-course'>
        <input type='text' onChange={handelChange}></input>
        <button onClick={addCourse}>Add Course</button>
      </div>
      <div className='list'>
        {courseList.map((course, index)=>{
          return (<Course key={index} course={course} completedCourse={completedCourse} deleteCourse={deleteCourse}></Course>)
        })}
      </div>
    </div>
  )
}
 
export default App;
