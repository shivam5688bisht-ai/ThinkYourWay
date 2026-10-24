import "./quiz.css"
import Quiz from "./quiz";
import { useState } from "react";


function Instructions({onQuiz}){

    return(
        <>
        <div className="quiz-home">
        <div className="pink-glow"></div>  
        <div className="quiz-page">
        <div className="quiz-card" id="instruction-card">

        <h1 id="h1">Quiz Rules</h1>
       
        
            <ul>


                <li>There are a total of 10 Q</li>
                <li>Click on the option you want to choose.</li>
                <li>You can use next and previous buttons to navigate .</li>
                <li>Once your answers are confirmed , click submit .</li>
                <li>Once submitted, your result will be displayed .</li>
                <li>You can use the restart button to restart the quiz.</li>

            
            </ul>
            <br></br>
            <br></br>
            <span id="ins"> IF YOU HAVE READ ALL THE INSTRUCTIONS , CLICK START : </span>
        
            <button onClick={onQuiz}  className="button" id="start"> START </button>


        </div>


        </div>

        </div>
        </>);
}
export default Instructions