import React, { useState } from 'react';
import './style.css';

const questions = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Berlin', 'London', 'Paris', 'Madrid'],
    answer: 'Paris',
  },
  {
    id: 2,
    question: 'Which language runs in a web browser?',
    options: ['Java', 'C', 'Python', 'JavaScript'],
    answer: 'JavaScript',
  },
  {
    id: 3,
    question: 'What does CSS stand for?',
    options: [
      'Central Style Sheets',
      'Cascading Style Sheets',
      'Cascading Simple Sheets',
      'Cars SUVs Sailboats',
    ],
    answer: 'Cascading Style Sheets',
  },
];

const DemoMockExam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = selectedOption;
    setAnswers(newAnswers);
    setSelectedOption('');
    setCurrentIndex(currentIndex + 1);
  };

  const handleSubmit = () => {
    let count = 0;
    answers.forEach((ans, index) => {
      if (ans === questions[index].answer) count++;
    });
    setScore(count);
    setSubmitted(true);
  };

  return (
    <div className="cbt-container">
      <h2>Computer Based Test</h2>
      {!submitted ? (
        <div className="cbt-question-box">
          <h3>
            Question {currentIndex + 1}: {currentQuestion.question}
          </h3>
          <ul className="cbt-options-list">
            {currentQuestion.options.map((option, idx) => (
              <li key={idx} className="cbt-option-item">
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          {currentIndex < questions.length - 1 ? (
            <button onClick={handleNext} disabled={!selectedOption} className="cbt-button">
              Next
            </button>
          ) : (
            <button onClick={handleSubmit} disabled={!selectedOption} className="cbt-button">
              Submit
            </button>
          )}
        </div>
      ) : (
        <div className="cbt-result-box">
          <h3>Test Completed</h3>
          <p>
            Your Score: {score} / {questions.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default DemoMockExam;
