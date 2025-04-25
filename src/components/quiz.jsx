import { useState } from "react";
import Results from "./results";

function Quiz() {
   const questionBank = [
    {
    Question: "What is the capital of Pakistan",
    options: ["berlin",
         "London",
        "Islamabad"],
    answer: "Islamabad",
    },
    {
        Question: "What language is used for web apps",
        options: ["PHP", "JAVASCRIPT", "BOTH"],
        answer: "BOTH",
    },
        {
            Question: "What does JSX stand for?",
            options: ["JavaScript XML", "java Syntax Extension", "Just a Simple Example"],
            answer: "JavaScript XML",
        },
        
   ]

const initialAnswers = [null, null, null];

const [userAnswers, setusersAnswers] = useState(initialAnswers);

const [currentQuestion, setCurrentQuestion] = useState(0)

const [isQuizFinished, setIsQuizFinished] = useState(false)

const selectedAnswer = userAnswers[currentQuestion];

function handleselectOption(option) {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;


    setusersAnswers(newUserAnswers)


}

 function goToNext() {
    if (currentQuestion === questionBank.length - 1) {
        setIsQuizFinished(true);
    } else {
    setCurrentQuestion(currentQuestion + 1);
    }





 }

 function goToPrev() {
    if (currentQuestion > 0) {
        setCurrentQuestion(currentQuestion - 1);

    }
   
 }

 function restartQuiz() {
    setusersAnswers(initialAnswers);
    setCurrentQuestion(0);
    setIsQuizFinished(false);
    
} 

if(isQuizFinished) {
    return <Results userAnswers={userAnswers} questionBank={questionBank} restartQuiz={restartQuiz} />;



}






    return ( <div><h2> Question {currentQuestion + 1}</h2>
        <p className="question"> {questionBank[currentQuestion].Question} </p>    
        {questionBank[currentQuestion].options.map((option) => (
            <button className={"option" + (selectedAnswer === option ? " selected" : "")} onClick={() => handleselectOption(option)}> {option}  
            </button>
        ))}
     
    
     <div className="nav-buttons">
     <button onClick={goToPrev} disabled={currentQuestion === 0}> previous</button>       
     <button onClick={goToNext} disabled={!selectedAnswer}> 
        {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
        </button>
     </div>
     </div>





    );
}

export default Quiz;