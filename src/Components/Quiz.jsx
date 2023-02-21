import React, { useState } from 'react'

const questions = [
    {
        question: 'What is the capital of France?',
        answers: ['London', 'Paris', 'Bratislava', 'Wien'],
        correctAnswer: 1
    },
    {
        question: 'What is the largest planet in our solar system?',
        answers: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        correctAnswer: 2
    },
    {
        question: 'What is the smallest country in the world?',
        answers: ['Vatican City', 'Monaco', 'San Marino', 'Liechtenstein'],
        correctAnswer: 0
    },
    {
        question: 'What is React?',
        answers: ["A JavaScript library for building user interfaces",
            "A server-side scripting language",
            "A markup language for web development",
            "A database management system"],
        correctAnswer: 0
    },
    {
        question: 'What is the fastest land animal?',
        answers: ["Cheetah",
        "Lion",
        "Leopard",
        "Tiger"],
        correctAnswer: 0
    },
]



const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [disableBtn, setDisableBtn] = useState(true);

    const handleAnswerOptionClick = (index) => {
        if (index === questions[currentQuestion].correctAnswer){
            setScore(score+1);
        }
        handleNextQuestion();
    }

    const handleNextQuestion = () =>{
        const nextQuestion = currentQuestion+1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
            setDisableBtn(true);
        }
        else{
            setShowScore(true);
        }
    }

    const handleDisableBtn = () =>{
        setDisableBtn(false);
    }

    const handleRestartClick = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
      };

    return (
        <>
            {
                showScore ? (
                    <div className="score-question">
                        You scored {score} out of {questions.length}
                        <button onClick={handleRestartClick}>Restart</button>
                    </div>
                    
                ) 
                : (
                    <section>
                        <div className="question-section">
                            <div className="question-count">
                                <span>Question {currentQuestion+1} </span>/{questions.length}
                            </div>
                            <div className="question-text">
                                {questions[currentQuestion].question}
                            </div>
                        </div>
                        <div className="answer-section">
                            {questions[currentQuestion].answers.map((answer, index) =>(
                                <button key={index} disabled={!disableBtn} onClick = {() => handleAnswerOptionClick(index)}>
                                    {answer}
                                </button>
                            ))}
                        </div>
                        {
                            disableBtn ? (
                                <button className='next-button' onClick={handleDisableBtn} >
                                    Next
                                </button>
                            ) : (
                                <button className="next-button" onClick={handleNextQuestion}>
                                    Next
                                </button>
                            )
                        }
                    </section>
                )
            }
        </>
    )
}

export default Quiz