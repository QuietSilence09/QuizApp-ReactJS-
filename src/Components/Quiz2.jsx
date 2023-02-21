import React, { useState } from 'react';

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

const Quiz2 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartClick = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className='quiz'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
          <button onClick={handleRestartClick}>Restart</button>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestionIndex + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestionIndex].question}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestionIndex].answers.map((answerOption) => (
              <button
                key={answerOption}
                onClick={() => handleAnswerOptionClick(answerOption)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz2;