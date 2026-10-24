
import { useState } from 'react';
import './quiz.css'
import Result from './Results';

const questions = [
    {
        id: 1,
        question: "Which hook manages state in React?",
        options: ["useState", "useFetch", "useStyle", "useRender"],
        answer: 0,
    },
    {
        id: 2,
        question: "Which hook is used for side effects in React?",
        options: ["useState", "useEffect", "useData", "useSide"],
        answer: 1,
    },
    {
        id: 3,
        question: "What is JSX in React?",
        options: [
            "A JavaScript database",
            "A syntax extension for JavaScript",
            "A CSS framework",
            "A React package manager"
        ],
        answer: 1,
    },
    {
        id: 4,
        question: "Which method is used to render a list of elements in React?",
        options: ["forEach()", "map()", "filter()", "reduce()"],
        answer: 1,
    },
    {
        id: 5,
        question: "What is used to pass data from a parent component to a child component?",
        options: ["Props", "State", "Hooks", "Events"],
        answer: 0,
    },
    {
        id: 6,
        question: "Which command creates a new React application using Vite?",
        options: [
            "npm create vite@latest",
            "npm install react-app",
            "react create app",
            "npm new react"
        ],
        answer: 0,
    },
    {
        id: 7,
        question: "Which hook is used to access a DOM element directly?",
        options: ["useState", "useEffect", "useRef", "useDOM"],
        answer: 2,
    },
    {
        id: 8,
        question: "What does a React component return?",
        options: [
            "Only JavaScript",
            "JSX/UI",
            "Only HTML",
            "Only CSS"
        ],
        answer: 1,
    },
    {
        id: 9,
        question: "Which of the following is used to uniquely identify elements in a React list?",
        options: ["id", "key", "index", "unique"],
        answer: 1,
    },
    {
        id: 10,
        question: "Which hook can be used to store a value without causing a re-render when the value changes?",
        options: ["useState", "useEffect", "useRef", "useRender"],
        answer: 2,
    }

];

const answers=questions.map(q => q.answer+1);


function Quiz({onHome}) {

    const [selectedOptions, setSelectedOptions] = useState(
        ()=> Object.fromEntries(questions.map(q => [q.id, 0]))
    );
    const [showResults,setShowResults]=useState(false);

    const buttonsArray = Array.from({ length: answers.length}, (_, index) => index + 1);


    const [i, seti] = useState(0);

    function index_inc() {
        seti(i => i < 9 ? i + 1 : 9);
    }

    function index_dec() {
        seti(i => i > 0 ? i - 1 : 0);
    }

    function Restart(){
        seti(0);

        setSelectedOptions(
            Object.fromEntries(questions.map(q => [q.id, 0]))
        );
    }

    function handleClear(){
         setSelectedOptions(prevOptions => ({
        ...prevOptions,     
        [questions[i].id]: 0      
    }));
    }

    function option(value) {
        setSelectedOptions(prev => ({
            ...prev,
            [questions[i].id]: value
        }));
    }

    function progress(){
        const pro =10*(questions.filter(
            q => selectedOptions[q.id] !==0 
            ).length);
        return pro;    
    }

    function direct(value){
        seti(value-1);
    }  

    if(showResults){
       return <Result  answers={answers} selectedOptions={selectedOptions} questions={questions}  setSelectedOptions={ setSelectedOptions} onHome={onHome}/>
    } 
        return (
            <>
            <div className="quiz-home">
            <div className="pink-glow"></div>  
               
                <div className="quiz-page"> 

                    <progress id="progress-bar" value={progress()} max="100"> </progress>

                    
                    <div className="quiz-card">
                    
                        <h1>Quiz</h1>
                            <button id="clear" className="button" onClick={()=>handleClear()} > Clear </button>

                        <p> Question {questions[i].id}. {questions[i].question}</p>
                        <div id="options">
                            {questions[i].options.map((opt, index) => (
                                <button
                                    key={index}
                                    className={
                                        selectedOptions[questions[i].id] === index + 1
                                            ? "selected"
                                            : ""
                                    }
                                    onClick={() => option(index + 1)}
                                >
                                    {["A", "B", "C", "D"][index]}. {opt}
                                </button>
                            ))}
                        </div>
                        
                        <div id="nav1">

                            <button id="previous" className="button" onClick={index_dec} >&lt;&lt; Previous </button>
                            <button id="next" className="button" onClick={index_inc}>Next &gt;&gt;</button>
                            <button id="restart" className="button" onClick={Restart}>Restart</button>
                            <button id="submit" className="button" onClick={()=>{setShowResults(true)}}>Submit</button>
                                

                        </div>
                    </div>
                </div>
                

                    <div id="container">
                     
                        
                        {buttonsArray.map((num) => (
                            <button 
                                    key={num} 
                                    className={
                                        (num-1)==i
                                            ? "active"
                                            : ""
                                    }    
                                    onClick={() => direct(num)}        
                                    
                            
                            >
                            {num}
                            </button>
                        ))}
                        
                        
                              
                    </div>

                </div>
                
                

            </>
        );
}

export default Quiz