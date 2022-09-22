import React from 'react';
import {useHistory,useParams} from 'react-router-dom';
import Button from "../button/Button";
import './taskDetails.css'
const Taskdetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleButtonclick = () =>{
        history.goBack()
    }
    return ( 
        <>
         <div className="button-container-details">
            <Button onClick={handleButtonclick}>Voltar</Button>
        </div>
        <div className='task-container-details'>
        <h2>{params.tasktitle}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsa repellendus repudiandae at mollitia error odit totam! Incidunt officia repellat, rerum, vel modi perferendis magnam earum dolorum minima possimus quasi.</p>
        </div>
        </>
       
     );
}
 
export default Taskdetails;