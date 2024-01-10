import React from 'react';
import {useNavigate} from 'react-router-dom';
export const Contact = () => {
    let navigate = useNavigate();
    return(<React.Fragment>
        <div>This is contact page</div>
        <button onClick={()=>{navigate('/')}}>Go to home page</button>
    </React.Fragment>) 
}