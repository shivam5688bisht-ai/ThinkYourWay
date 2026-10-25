import "./quiz.css"
import Quiz from "./quiz";
import { useState } from "react";


function Display_instructions(difficulty){

        if (difficulty==="Easy"){
            return (<ul>


                <li>There are a total of 10 Q</li>
                <li>Click on the option you want to choose.</li>
                <li>You can use next and previous buttons to navigate .</li>
                <li>Once your answers are confirmed , click submit .</li>
                <li>Once submitted, your result will be displayed .</li>
                <li>You can use the restart button to restart the quiz.</li>
                <li>Use the clear button to clear your selection.</li>
                <li>Total Time : 05m 00s</li>

            
            </ul>)
        }

        else if (difficulty==="Medium"){
            return (<ul>


                <li>There are a total of 20 Q</li>
                <li>Click on the option you want to choose.</li>
                <li>You can use next and previous buttons to navigate .</li>
                <li>Once your answers are confirmed , click submit .</li>
                <li>Once submitted, your result will be displayed .</li>
                <li>You can use the restart button to restart the quiz.</li>
                <li>Use the clear button to clear your selection.</li>
                <li>Total Time : 10m 00s</li>
            
            </ul>)
        }

        else if (difficulty==="Hard"){
            return (<ul>


                <li>There are a total of 30 Q</li>
                <li>Click on the option you want to choose.</li>
                <li>You can use next and previous buttons to navigate .</li>
                <li>Once your answers are confirmed , click submit .</li>
                <li>Once submitted, your result will be displayed .</li>
                <li>You can use the restart button to restart the quiz.</li>
                <li>Use the clear button to clear your selection.</li>
                <li>Total Time : 15m 00s </li>
            
            </ul>)
        }
    }

function Instructions({onQuiz,difficulty,setDifficulty}){

    return(
        <>
        <div className="quiz-home">
        <div className="pink-glow"></div>  
        <div className="quiz-page">
        <div className="quiz-card" id="instruction-card">

        <h1 id="h1">Quiz Rules</h1>
       
           {Display_instructions(difficulty)}
            
            <br></br>

            <span id="ins"> CHOOSE DIFFICULTY AND CLICK START : </span>
        
            <button onClick={onQuiz}  className="button" id="start"> START </button>

                        <div className="difficult">
                        <span id="diff-text">Difficulty:</span>    
                        <button onClick={() => setDifficulty("Easy")} 
                            className={
                                    difficulty==="Easy"
                                    ?"difficult1"
                                    :""
                            }
                            id="easy" >
                            Easy
                        </button>

                        <button onClick={() => setDifficulty("Medium")} id="medium"
                        className={
                                    difficulty==="Medium"
                                    ?"difficult1"
                                    :""
                            } >
                            Medium
                        </button>

                        <button onClick={() => setDifficulty("Hard")} id="hard" 
                            className={
                                    difficulty==="Hard"
                                    ?"difficult1"
                                    :""
                            }>
                            Hard
                        </button>
                        </div>


        </div>


        </div>

        </div>
        </>);
}
export default Instructions