import {useEffect, useState } from "react";

const Text = () =>{
    const [text,setText]= useState("");
    // did mount
    useEffect(()=>{
        console.log("component did mount");
        return()=>{
            console.log("Unmount")
        }
      },[])
      //Update mount
    useEffect(()=>{
        console.log("Update did mount");
      },[text])
    return(
        <div>
            <input onChange={(e)=> setText(e.target.value)} />
            <h1>{text}</h1>
        </div>
    )
}

export default Text;