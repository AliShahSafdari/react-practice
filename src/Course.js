const Course = (props) => {
     return (<div style={{backgroundColor: props.course.isCompleted ? 'green': 'white'}}>
            <h1 >{props.course.courseName}</h1>
            <button  onClick={() => props.deleteCourse(props.course.id)}>X</button>
            <button  onClick={() => props.completedCourse(props.course.id)}>Completed Course</button>
          </div>)
}
export default Course;