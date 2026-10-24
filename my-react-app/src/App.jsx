import { useState } from 'react';
import './App.css' 
import Instructions from './instructions.jsx';
import Result from './Results.jsx';
import Quiz from './quiz.jsx';



function App() {
  const [page, setPage] = useState("home");

  if (page==="instruct") 
    return <Instructions onQuiz={()=>setPage("quiz")}/>

  if(page==="quiz"){
    return(
      <Quiz onResult={()=>setPage("result")} onHome={()=>setPage("home")}/>
    )
  } 

  if(page==="home"){
  return (
    <>
  
    <div className="quiz-home">
    <div className="pink-glow"></div>  
    <header>
      <div id="nav">
        <span  className="text">ThinkYourWay</span>
        
        <div id="more">
          <a href="#"  className="gradient-text">Home</a>
          <a href="#"  className="gradient-text">Quizzes</a>
          <a href="#"  className="gradient-text">About</a>
        </div>   
                 
      </div> 
       
      </header>
      <main>
          <div id="main-text">
            <span id="starter">WELCOME TO</span>
            <h1  className="text" id="head" >ThinkYourWay</h1>
            <p id="description">Test your knowledge, challenge your thinking and learn something new.</p>
            <button onClick={()=>setPage("instruct")}  className="start-quiz">Start Quiz</button>
          </div>
          
      </main>

      </div>
      
    </>
  );
}
}






export default App
