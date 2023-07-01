// src/components/Quiz.js
import React, { useState } from "react";
import Question from "./Question";
import { quizData } from "../data/quizData";
import "./Quiz.css";
import Certificat from "./Certificat";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const onClickNext = () => {
    if (isAnswerSelected) {
      setActiveQuestion((prev) => prev + 1);
      setResult((prev) =>
        selectedAnswer === quizData[activeQuestion].correctAnswer
          ? {
              ...prev,
              score: prev.score + 5,
              correctAnswers: prev.correctAnswers + 1,
            }
          : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
      );
      setSelectedAnswer("");
      setIsAnswerSelected(false);
    }
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setIsAnswerSelected(true);
  };

  const restartQuiz = () => {
    setActiveQuestion(0);
    setSelectedAnswer("");
    setIsAnswerSelected(false);
    setResult({ score: 0, correctAnswers: 0, wrongAnswers: 0 });
  };

  const showCertificate = result.score >= 10;

  return (
    <div className="quiz-container">
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${((activeQuestion + 1) / quizData.length) * 100}%` }}
        ></div>
      </div>

      {activeQuestion < quizData.length ? (
        <div className="quiz-card">
          <h2 className="quiz-title">Quiz</h2>

          <Question
            question={quizData[activeQuestion].question}
            options={quizData[activeQuestion].options}
            onSelect={handleAnswerSelect}
          />

          <button className="next-button" onClick={onClickNext} disabled={!isAnswerSelected}>
            Next
          </button>
        </div>
      ) : (
        <>
          <div className="quiz-completed">
            <h2 className="quiz-title">Quiz Completed!</h2>
            <p className="quiz-text">Thank you for taking the quiz.</p>
            <p className="quiz-text">Score: {result.score}</p>
            <p className="quiz-text">Correct Answers: {result.correctAnswers}</p>
            <p className="quiz-text">Wrong Answers: {result.wrongAnswers}</p>
            {showCertificate ? (
              <>
                <p className="quiz-text">Congratulations! You passed the quiz.</p>
                <Certificat score={result.score} />
              </>
            ) : (
              <>
                <p className="quiz-text">You didn't pass the quiz. Please try again.</p>
                <button className="restart-button" onClick={restartQuiz}>
                  Restart Quiz
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
