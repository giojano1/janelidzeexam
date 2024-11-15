"use client";

import { useState } from "react";

// Define types for the quiz questions
type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};

// Static array of quiz questions
const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    id: 3,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    correctAnswer: "Pacific",
  },
];

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (selectedOption: string): void => {
    const isRight =
      selectedOption === quizQuestions[currentQuestion].correctAnswer;
    if (isRight) {
      setScore((prev) => prev + 1);
    }
    if (quizQuestions.length === currentQuestion + 1) {
      setIsCompleted(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  // შექმენით ფუნქცია რომელიც განაახლებს ქვიზის სტატუსს და დასრულებს ქვიზს
  const restartQuiz = (): void => {
    setScore(0);
    setCurrentQuestion(0);
    setIsCompleted(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
        {isCompleted ? (
          <>
            <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
            <p className="text-lg mb-6">
              Your Score:
              <span className="font-semibold"> {score}</span> /
              {quizQuestions.length}
            </p>
            <button
              onClick={restartQuiz}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
            >
              Restart Quiz
            </button>
          </>
        ) : (
          <>
            <p className="text-gray-600 mb-4">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </p>
            <h1 className="text-2xl font-bold mb-4">
              {quizQuestions[currentQuestion].question}
            </h1>
            <div className="space-y-4">
              {quizQuestions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className="block w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition"
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
