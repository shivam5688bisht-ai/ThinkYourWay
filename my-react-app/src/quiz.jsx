
import { useState } from 'react';
import './quiz.css'
import Result from './Results';
import Timer from './Timer.jsx';

const questions1 = [
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
        question: "Which method is commonly used to render a list of elements in React?",
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
        question: "What does a React component usually return?",
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
        question: "Which property is used to uniquely identify elements in a React list?",
        options: ["id", "key", "index", "unique"],
        answer: 1,
    },
    {
        id: 10,
        question: "Which hook can store a value without causing a re-render when the value changes?",
        options: ["useState", "useEffect", "useRef", "useRender"],
        answer: 2,
    },

    {
        id: 11,
        question: "What does React primarily help developers build?",
        options: [
            "Databases",
            "User interfaces",
            "Operating systems",
            "Web servers"
        ],
        answer: 1,
    },
    {
        id: 12,
        question: "Who developed React?",
        options: ["Google", "Microsoft", "Meta", "Amazon"],
        answer: 2,
    },
    {
        id: 13,
        question: "React was originally developed by which company?",
        options: ["Facebook", "Apple", "Netflix", "Twitter"],
        answer: 0,
    },
    {
        id: 14,
        question: "What is a React component?",
        options: [
            "A reusable piece of UI",
            "A database table",
            "A CSS file",
            "A browser extension"
        ],
        answer: 0,
    },
    {
        id: 15,
        question: "Which naming convention is commonly used for React components?",
        options: [
            "camelCase",
            "UPPER_CASE",
            "PascalCase",
            "snake_case"
        ],
        answer: 2,
    },
    {
        id: 16,
        question: "Which file extension can be used for React components containing JSX?",
        options: [".jsx", ".css", ".json", ".sql"],
        answer: 0,
    },
    {
        id: 17,
        question: "What does SPA stand for?",
        options: [
            "Single Page Application",
            "Simple Page Application",
            "Single Program Architecture",
            "Static Page Application"
        ],
        answer: 0,
    },
    {
        id: 18,
        question: "React is mainly a ______.",
        options: ["Programming language", "Library", "Database", "Operating system"],
        answer: 1,
    },
    {
        id: 19,
        question: "Which syntax is used to embed JavaScript expressions inside JSX?",
        options: ["()", "{}", "[]", "<>"],
        answer: 1,
    },
    {
        id: 20,
        question: "Which HTML-like syntax is commonly used in React?",
        options: ["JSX", "SQL", "XML only", "Markdown"],
        answer: 0,
    },

    {
        id: 21,
        question: "What is the purpose of props in React?",
        options: [
            "To pass data to components",
            "To style components",
            "To create databases",
            "To install packages"
        ],
        answer: 0,
    },
    {
        id: 22,
        question: "Are props generally read-only?",
        options: ["Yes", "No", "Only in class components", "Only in Vite"],
        answer: 0,
    },
    {
        id: 23,
        question: "Can a child component directly modify its props?",
        options: ["Yes", "No", "Only strings", "Only numbers"],
        answer: 1,
    },
    {
        id: 24,
        question: "What is state in React?",
        options: [
            "Data managed by a component",
            "A CSS property",
            "A URL",
            "A package manager"
        ],
        answer: 0,
    },
    {
        id: 25,
        question: "What function does useState return?",
        options: [
            "Only the state",
            "Only a setter",
            "The current state and a setter function",
            "A component"
        ],
        answer: 2,
    },
    {
        id: 26,
        question: "What happens when state is updated using its setter function?",
        options: [
            "The component can re-render",
            "The browser closes",
            "The component is deleted",
            "Nothing happens"
        ],
        answer: 0,
    },
    {
        id: 27,
        question: "Which syntax correctly declares state?",
        options: [
            "const [count, setCount] = useState(0)",
            "const count = state(0)",
            "let [count] = state()",
            "useState count = 0"
        ],
        answer: 0,
    },
    {
        id: 28,
        question: "What is the initial value in useState(0)?",
        options: ["0", "null", "undefined", "false"],
        answer: 0,
    },
    {
        id: 29,
        question: "Can state store objects and arrays?",
        options: ["Yes", "No", "Only objects", "Only arrays"],
        answer: 0,
    },
    {
        id: 30,
        question: "Which hook is used to perform side effects?",
        options: ["useState", "useEffect", "useRef", "useMemo"],
        answer: 1,
    },

    {
        id: 31,
        question: "When does useEffect run by default?",
        options: [
            "Only before rendering",
            "After rendering",
            "Before the application starts",
            "Never"
        ],
        answer: 1,
    },
    {
        id: 32,
        question: "What does an empty dependency array [] usually mean in useEffect?",
        options: [
            "Run after every render",
            "Run once after the initial render",
            "Never run",
            "Run only when props change"
        ],
        answer: 1,
    },
    {
        id: 33,
        question: "What is the purpose of the dependency array in useEffect?",
        options: [
            "To control when the effect runs",
            "To create JSX",
            "To define CSS",
            "To create components"
        ],
        answer: 0,
    },
    {
        id: 34,
        question: "Which hook can be used to cache an expensive calculation?",
        options: ["useMemo", "useState", "useEffect", "useRef"],
        answer: 0,
    },
    {
        id: 35,
        question: "Which hook can memoize a function?",
        options: ["useCallback", "useState", "useEffect", "useValue"],
        answer: 0,
    },
    {
        id: 36,
        question: "Which hook can store a mutable reference?",
        options: ["useRef", "useState", "useEffect", "useMemo"],
        answer: 0,
    },
    {
        id: 37,
        question: "Does changing a useRef value normally cause a re-render?",
        options: ["Yes", "No", "Only with JSX", "Only with arrays"],
        answer: 1,
    },
    {
        id: 38,
        question: "Which hook is useful for sharing stateful logic between components?",
        options: ["Custom hooks", "useHTML", "useCSS", "useComponent"],
        answer: 0,
    },
    {
        id: 39,
        question: "What is the conventional naming rule for custom hooks?",
        options: [
            "They should start with use",
            "They should start with hook",
            "They must end with Hook",
            "They must be uppercase"
        ],
        answer: 0,
    },
    {
        id: 40,
        question: "Which of these is a valid built-in React hook?",
        options: ["useState", "useData", "useHTML", "useComponent"],
        answer: 0,
    },

    {
        id: 41,
        question: "What is conditional rendering?",
        options: [
            "Rendering UI based on a condition",
            "Rendering CSS only",
            "Deleting components",
            "Changing the browser"
        ],
        answer: 0,
    },
    {
        id: 42,
        question: "Which operator is commonly used for conditional rendering in JSX?",
        options: ["&&", "++", "--", "**"],
        answer: 0,
    },
    {
        id: 43,
        question: "Which operator can be used as a conditional expression in JSX?",
        options: ["Ternary operator", "Assignment operator", "Increment operator", "Bitwise operator"],
        answer: 0,
    },
    {
        id: 44,
        question: "What is the syntax of the ternary operator?",
        options: [
            "condition ? trueValue : falseValue",
            "condition : trueValue ? falseValue",
            "if ? condition : value",
            "condition && value"
        ],
        answer: 0,
    },
    {
        id: 45,
        question: "Which method is commonly used to create multiple JSX elements from an array?",
        options: ["map()", "push()", "join()", "sort()"],
        answer: 0,
    },
    {
        id: 46,
        question: "Why does React require keys when rendering lists?",
        options: [
            "To identify elements efficiently",
            "To add CSS",
            "To create state",
            "To prevent JavaScript"
        ],
        answer: 0,
    },
    {
        id: 47,
        question: "Which value is generally a better key for a list?",
        options: [
            "A unique stable ID",
            "A random number every render",
            "A CSS class",
            "The component name"
        ],
        answer: 0,
    },
    {
        id: 48,
        question: "Can an array index be used as a React key?",
        options: [
            "Yes, although it can be problematic for changing lists",
            "Never",
            "Only for strings",
            "Only in CSS"
        ],
        answer: 0,
    },
    {
        id: 49,
        question: "Which method filters items from an array?",
        options: ["filter()", "map()", "reduce()", "forEach()"],
        answer: 0,
    },
    {
        id: 50,
        question: "Which JavaScript method can transform an array into a single value?",
        options: ["reduce()", "map()", "filter()", "find()"],
        answer: 0,
    },

    {
        id: 51,
        question: "What is lifting state up?",
        options: [
            "Moving shared state to a common parent",
            "Deleting state",
            "Moving state into CSS",
            "Creating a new database"
        ],
        answer: 0,
    },
    {
        id: 52,
        question: "How can a child component communicate data to a parent?",
        options: [
            "By calling a callback function passed as a prop",
            "By directly changing parent state",
            "By changing CSS",
            "By using HTML attributes only"
        ],
        answer: 0,
    },
    {
        id: 53,
        question: "What is prop drilling?",
        options: [
            "Passing props through multiple components",
            "Deleting props",
            "Styling props",
            "Creating props automatically"
        ],
        answer: 0,
    },
    {
        id: 54,
        question: "Which React feature can help avoid excessive prop drilling?",
        options: ["Context API", "CSS Grid", "JSX", "Fragments"],
        answer: 0,
    },
    {
        id: 55,
        question: "Which hook is used to consume React Context?",
        options: ["useContext", "useState", "useData", "useProvider"],
        answer: 0,
    },
    {
        id: 56,
        question: "Which component provides a Context value?",
        options: [
            "Context Provider",
            "Context Consumer only",
            "Fragment",
            "StrictMode"
        ],
        answer: 0,
    },
    {
        id: 57,
        question: "What does React.Fragment help you do?",
        options: [
            "Group elements without adding an extra DOM element",
            "Create CSS",
            "Create state",
            "Fetch data"
        ],
        answer: 0,
    },
    {
        id: 58,
        question: "Which shorthand can represent a React Fragment?",
        options: ["<>...</>", "<div>...</div>", "[]", "{}"],
        answer: 0,
    },
    {
        id: 59,
        question: "Can a React component return multiple elements?",
        options: [
            "Yes, if they are wrapped in a parent or Fragment",
            "No, never",
            "Only images",
            "Only buttons"
        ],
        answer: 0,
    },
    {
        id: 60,
        question: "What is component composition?",
        options: [
            "Building components by combining other components",
            "Deleting components",
            "Converting CSS to JSX",
            "Creating databases"
        ],
        answer: 0,
    },

    {
        id: 61,
        question: "What is the Virtual DOM?",
        options: [
            "A lightweight representation of the UI",
            "A physical DOM device",
            "A database",
            "A CSS framework"
        ],
        answer: 0,
    },
    {
        id: 62,
        question: "What does React compare during reconciliation?",
        options: [
            "Previous and new UI representations",
            "Two CSS files",
            "Two databases",
            "Two browsers"
        ],
        answer: 0,
    },
    {
        id: 63,
        question: "What is reconciliation in React?",
        options: [
            "The process of determining UI updates",
            "Installing React",
            "Writing CSS",
            "Creating a server"
        ],
        answer: 0,
    },
    {
        id: 64,
        question: "What is a controlled input?",
        options: [
            "An input whose value is controlled by React state",
            "An input controlled by CSS",
            "An input with no value",
            "An input controlled by the browser only"
        ],
        answer: 0,
    },
    {
        id: 65,
        question: "Which event is commonly used to detect changes in a text input?",
        options: ["onChange", "onInputChange", "onText", "onValue"],
        answer: 0,
    },
    {
        id: 66,
        question: "Which event is commonly used when a button is clicked?",
        options: ["onClick", "onPress", "onButton", "onTap"],
        answer: 0,
    },
    {
        id: 67,
        question: "How are React event handlers usually written?",
        options: [
            "onClick={handleClick}",
            "onclick=\"handleClick\"",
            "click={handleClick}",
            "event=handleClick"
        ],
        answer: 0,
    },
    {
        id: 68,
        question: "What is SyntheticEvent in React?",
        options: [
            "React's cross-browser event wrapper",
            "A CSS event",
            "A database event",
            "A browser plugin"
        ],
        answer: 0,
    },
    {
        id: 69,
        question: "Which event can be used to submit a form?",
        options: ["onSubmit", "onForm", "onSend", "onEnter"],
        answer: 0,
    },
    {
        id: 70,
        question: "Which method prevents the default browser action for an event?",
        options: [
            "event.preventDefault()",
            "event.stopDefault()",
            "event.prevent()",
            "event.cancel()"
        ],
        answer: 0,
    },

    {
        id: 71,
        question: "What is React Router used for?",
        options: [
            "Handling navigation between views/pages",
            "Managing databases",
            "Styling components",
            "Creating animations only"
        ],
        answer: 0,
    },
    {
        id: 72,
        question: "Which component is commonly used to define a route in React Router?",
        options: ["Route", "Path", "Page", "NavigateTo"],
        answer: 0,
    },
    {
        id: 73,
        question: "Which component is used to create navigation links in React Router?",
        options: ["Link", "RouterLink", "NavigateLink", "Anchor"],
        answer: 0,
    },
    {
        id: 74,
        question: "Which hook provides access to navigation in React Router?",
        options: ["useNavigate", "useRoute", "usePage", "useLink"],
        answer: 0,
    },
    {
        id: 75,
        question: "Which hook can access route parameters?",
        options: ["useParams", "useRouteData", "usePath", "useURL"],
        answer: 0,
    },
    {
        id: 76,
        question: "What does npm stand for?",
        options: [
            "Node Package Manager",
            "New Package Method",
            "Node Programming Manager",
            "Network Package Manager"
        ],
        answer: 0,
    },
    {
        id: 77,
        question: "Which command installs a package using npm?",
        options: [
            "npm install package-name",
            "npm get package-name",
            "npm add-package package-name",
            "install npm package-name"
        ],
        answer: 0,
    },
    {
        id: 78,
        question: "What is package.json used for?",
        options: [
            "Project metadata, scripts, and dependencies",
            "Only CSS",
            "Only HTML",
            "Only images"
        ],
        answer: 0,
    },
    {
        id: 79,
        question: "Which command starts a typical Vite development server?",
        options: [
            "npm run dev",
            "npm start vite",
            "vite start-app",
            "npm launch"
        ],
        answer: 0,
    },
    {
        id: 80,
        question: "What does Vite provide for a React project?",
        options: [
            "A fast development/build tool",
            "A database",
            "A CSS-only framework",
            "A browser"
        ],
        answer: 0,
    },

    {
        id: 81,
        question: "What is a default export?",
        options: [
            "The main exported value from a module",
            "A CSS property",
            "A React state variable",
            "A browser event"
        ],
        answer: 0,
    },
    {
        id: 82,
        question: "Which syntax imports a default export?",
        options: [
            "import App from './App'",
            "import { App } from './App'",
            "require App from './App'",
            "include App from './App'"
        ],
        answer: 0,
    },
    {
        id: 83,
        question: "Which syntax imports a named export?",
        options: [
            "import { App } from './App'",
            "import App from './App'",
            "include { App }",
            "require { App }"
        ],
        answer: 0,
    },
    {
        id: 84,
        question: "What is a named export?",
        options: [
            "An export that can be imported by its specific name",
            "An export that must be called App",
            "An HTML element",
            "A CSS class"
        ],
        answer: 0,
    },
    {
        id: 85,
        question: "Can a JavaScript module have multiple named exports?",
        options: ["Yes", "No", "Only one", "Only two"],
        answer: 0,
    },
    {
        id: 86,
        question: "What does import do in JavaScript?",
        options: [
            "Brings exported values into a module",
            "Creates CSS",
            "Creates HTML",
            "Starts a server"
        ],
        answer: 0,
    },
    {
        id: 87,
        question: "What does export do?",
        options: [
            "Makes values available to other modules",
            "Deletes a module",
            "Creates a component automatically",
            "Runs CSS"
        ],
        answer: 0,
    },
    {
        id: 88,
        question: "Which keyword is used to create a function component?",
        options: ["function", "component", "react", "jsx"],
        answer: 0,
    },
    {
        id: 89,
        question: "Can an arrow function be used as a React component?",
        options: ["Yes", "No", "Only in class components", "Only with CSS"],
        answer: 0,
    },
    {
        id: 90,
        question: "Which syntax correctly defines an arrow function?",
        options: [
            "const App = () => {}",
            "function => App()",
            "App -> function()",
            "const => App()"
        ],
        answer: 0,
    },

    {
        id: 91,
        question: "What is StrictMode used for in React?",
        options: [
            "Highlighting potential problems during development",
            "Making the app production-only",
            "Adding CSS",
            "Creating routes"
        ],
        answer: 0,
    },
    {
        id: 92,
        question: "Does React StrictMode usually affect production behavior in the same way as development?",
        options: ["No", "Yes", "Only CSS changes", "Only HTML changes"],
        answer: 0,
    },
    {
        id: 93,
        question: "What is an error boundary designed to handle?",
        options: [
            "Errors during rendering in descendant components",
            "CSS syntax errors",
            "Network speed",
            "Database queries only"
        ],
        answer: 0,
    },
    {
        id: 94,
        question: "What is lazy loading in React commonly used for?",
        options: [
            "Loading components only when needed",
            "Making state permanent",
            "Removing JSX",
            "Changing CSS colors"
        ],
        answer: 0,
    },
    {
        id: 95,
        question: "Which React API is commonly used for lazy-loading a component?",
        options: ["lazy()", "load()", "useLazy()", "lazyComponent()"],
        answer: 0,
    },
    {
        id: 96,
        question: "Which component is used with React.lazy() to display fallback UI?",
        options: ["Suspense", "Fallback", "Loading", "Wait"],
        answer: 0,
    },
    {
        id: 97,
        question: "What is memoization used for?",
        options: [
            "Avoiding unnecessary calculations or renders",
            "Creating databases",
            "Writing CSS",
            "Installing React"
        ],
        answer: 0,
    },
    {
        id: 98,
        question: "Which React API can prevent a component from re-rendering when its props have not changed?",
        options: ["memo()", "preventRender()", "stop()", "freeze()"],
        answer: 0,
    },
    {
        id: 99,
        question: "What is the purpose of React DevTools?",
        options: [
            "Inspecting and debugging React components",
            "Creating databases",
            "Writing CSS automatically",
            "Hosting websites"
        ],
        answer: 0,
    },
    {
        id: 100,
        question: "Which statement best describes React?",
        options: [
            "A JavaScript library for building user interfaces",
            "A database management system",
            "A programming language",
            "A CSS preprocessor"
        ],
        answer: 0,
    }
];



function Quiz({onHome,difficulty,Display_instructions}) {
    let time=60;

    function randomiser(n){
        let arr=[];
        while(arr.length<n){
            let r=Math.floor(Math.random()*100+1)
            if (arr.indexOf(r)==-1){
                arr.push(r);
            }
        }
        return arr;
    }
    const [questions] = useState(() => {
        let n;

        if (difficulty === "Easy") {
            n = 10;
        } 
        else if (difficulty === "Medium") {
            n = 30;
        } 
        else {
            n = 50;
        }

        const array = randomiser(n);

        return array.map((id) =>
            questions1.find(q => q.id === id)
        );
    });

    if(difficulty==="Easy"){
        
        time=300;
       
    }

    else if(difficulty==="Medium"){
       
        time=600;
       
    }

    else if (difficulty==="Hard"){
       
        time=900;
        
    }

    const answers=questions.map(q => q.answer+1);

    const l=answers.length;

    const [selectedOptions, setSelectedOptions] = useState(
        ()=> Object.fromEntries(questions.map(q => [q.id, 0]))
    );
    const [showResults,setShowResults]=useState(false);

    const buttonsArray = Array.from({ length: answers.length}, (_, index) => index + 1);


    const [i, seti] = useState(0);

    function index_inc() {
        seti(i => i < questions.length-1 ? i + 1 :  questions.length-1 );
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
        const pro =(100/l)*(questions.filter(
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

                <div className="quiz-card" id="instruction-card">

        <h1 id="h1">Quiz Rules</h1>
       
           {Display_instructions(difficulty)}
           </div>
                 
                <div className="quiz-page"> 

                    

                    <progress id="progress-bar" value={progress()} max="100"> </progress>
                    
                    
                    <div className="quiz-card">
                    
                        <h1>Quiz</h1>
                            <button id="clear" className="button" onClick={()=>handleClear()} > Clear </button>
                              <Timer seconds={time} onTimeUp={()=>setShowResults(true)}/>

                        <p> Question {i+1}. {questions[i].question}</p>
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