import logo from './logo.svg';
import './App.css';

function App() {
  const classes = [
    { name: "HTML" , finished : true},
    { name : "JavaScript" , finished : false},
    { name: 'CSS', finished: true},
    { name: 'BootStrap', finished: false},
    { name: "React", finished: true},
    { name: "Python", finished: false},
  ];
  return (
    <div>{classes.map(( value, index) =>{
      return value.finished && <Courses key={index} name={value.name} finished={ value.finished} ></Courses>

    })}</div>

  )
}
 
const Courses = (props) =>{
  return(
    <div>
      <h2>{props.name}</h2>
      <p>{props.finished}</p>
    </div>
  );
}
// const JObComponent = (props) =>{
//   return(
//    <div>
//     <h1>${props.salary}</h1>
//     <h2>{props.position}</h2>
//     <p>{props.company}</p>
//    </div> 
//   );
// }



export default App;
