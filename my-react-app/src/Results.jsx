import { useState } from "react";
import "./Results.css"


function Result({ answers, selectedOptions, questions, setSelectedOptions, onHome}) {

    const l = answers.length;

    const score = questions.filter(
        q => selectedOptions[q.id] === q.answer + 1
    ).length;

    const skipped = questions.filter(
        q => selectedOptions[q.id] === 0
    ).length;

    const percentage = Math.round((score / l) * 100);

    function evaluation(score){
        if (score==0){
            return "Room to Grow!";
        }
        else if (score>0 && score<=(0.3*l)){
            return "Can Improve!";
        }
        else if (score>(0.3*l) && score<=(0.5*l)){
            return "Keep Going!";
        }
        else if (score>(0.5*l) && score<=(0.7*l)){
            return "Good!";
        }
        else if (score>(0.7*l) && score<=(0.9*l)){
            return "Very Good!";
        }
        else if (score>(0.7*l) && score<(l)){
            return "Excellent!";
        }
        else {
            return "Outstanding!";
        }

    }

    function reset(){
        setSelectedOptions(
            Object.fromEntries(questions.map(q => [q.id, 0]))
        );
    }

    return (

        <>
            <div className="results-page">
                <div className="result-card">

                    <div id="result-text" className="typing" data-text="Result">RESULT : {score}/{l}</div>
                    <div id="correct" className="res">Correct : {score}</div>
                    <div id="incorrect" className="res">Incorrect : {l - score - skipped}</div>
                    <div id="skip" className="res">Skipped : {skipped}</div>

                    <div className="circular-bar">
                    <div
                        className="score-circle"
                        style={{ "--score": `${percentage}%` }}
                    >
                        <svg viewBox="0 0 200 200">
                            <defs>
                                <linearGradient
                                    id="scoreGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="100%"
                                >
                                    <stop offset="0%" stopColor="#a8aaff" />
                                    <stop offset="50%" stopColor="#c084fc" />
                                    <stop offset="100%" stopColor="#d95be8" />
                                </linearGradient>
                            </defs>

                            <circle
                                className="score-track"
                                cx="100"
                                cy="100"
                                r="78"
                                pathLength="100"
                            />

                            <circle
                                className="score-progress"
                                cx="100"
                                cy="100"
                                r="78"
                                pathLength="100"
                                style={{ "--target": 100 - percentage }}
                            />
                        </svg>
                        

                        <div className="score-number">
                            {percentage}%
                        </div>
                    </div>
                    </div>
                    <div id="remark">Remarks:</div>
                    <div id="evaluation" className="res">
                        
                        {evaluation(score)}
                    </div>

                    <button
            className="home-button"
            onClick={()=>{onHome(),reset()}}
        >
            Go to Home
        </button>

                </div>

            </div>

        </>
    )
}

export default Result