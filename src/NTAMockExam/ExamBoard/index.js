import React, { useEffect, useState } from 'react';
import './Style.scss';
import { currentUser, questionBank } from '../sampleData';
import QuestionButton, { Answered, ButtonType, MarkedAnswered, MarkedNotAnswered, NoVisited, VisitedNotAnswered } from '../Button';
import CountdownTimer from '../Counter';
import { useScreen } from '../NTARouting';

const ExamBoard = (props) => {
    const user = { ...currentUser };
    const [questionList, setQuestionList] = useState([...questionBank])
    const [userSelectedAnswer, setUserSelected] = useState(undefined);
    const [questionId, setQuestionId] = useState(-1)
    useEffect(() => {
        if (questionId > 0) {
            reboundCurrent();
            setUserSelected(questionList[getCurrentQuestionIndex()].selected);
        }
    }, [questionId])

    useEffect(() => {
        setQuestionId(questionList[0].id);
    }, [])
    const prev = () => {
        let index = getCurrentQuestionIndex() - 1;
        setQuestionId(questionList[index].id);
    }
    const saveAndNext = () => {
        questionList[getCurrentQuestionIndex()].selected = userSelectedAnswer;
        reboundCurrent();
        next();
    }
    const next = () => {

        let index = getCurrentQuestionIndex() + 1;
        if (index === questionList.length)
            index = 0;
        setQuestionId(questionList[index].id);
    }
    const jump = (id) => {
        setQuestionId(id);
    }

    const reboundCurrent = () => {
        questionList[getCurrentQuestionIndex()].buttonType = switchMark();
        setQuestionList([...questionList]);
    }

    const getCurrentQuestionIndex = () => {
        return questionList.findIndex(f => f.id === questionId);
    }


    const submit = () => {
        const confirmed = window.confirm("Are you sure you want to submit?");
        if (confirmed) {
            // proceed with submission
            console.log("Submitted!");
            props.nextScreen(useScreen.Logout)
        } else {
            console.log("Submission cancelled.");
        }
    };

    const clear = () => {
        setUserSelected(undefined);
        // questionList[getCurrentQuestionIndex()].selected = undefined;
        reboundCurrent();
    }
    const handleChange = (e) => {
        //  questionList[getCurrentQuestionIndex()].selected = e.target.value;
        setUserSelected(e.target.value);
        //reboundCurrent();
    }

    const markQuestion = () => {
        questionList[getCurrentQuestionIndex()].marked = !questionList[getCurrentQuestionIndex()].marked;
        reboundCurrent();
        next()
    }

    const switchMark = () => {
        let currentQuestion = questionList[getCurrentQuestionIndex()];
        let buttonType = ButtonType.no_visited;
        if (!!currentQuestion.marked && !!currentQuestion.selected)
            buttonType = ButtonType.mark_answered
        else if (!!currentQuestion.marked && !currentQuestion.selected)
            buttonType = ButtonType.mark_no_answered
        else if (!!currentQuestion.selected)
            buttonType = ButtonType.answered
        else if (!currentQuestion.selected)
            buttonType = ButtonType.no_answered
        else if (!currentQuestion.visited)
            buttonType = ButtonType.no_visited;

        return buttonType
        // questionList[getCurrentQuestionIndex()].buttonType = buttonType;
        // reboundCurrent();
    }


    if (questionId === -1)
        return null;


    const currentQuestion = questionList[getCurrentQuestionIndex()];
    return (
        <div className="cbt-container">
            {/* Title Bar */}
            <div className="cbt-header">
                <img src={user.photo} alt="User" className="user-photo" />
                <div className="user-details">
                    <h3>{user.name}</h3>
                    <p>Roll No: {user.rollNumber}</p>
                    <p>Subject: {user.subject}</p>
                    <CountdownTimer initialMinutes={120} />
                </div>

            </div>
            {/* {
      "id": 1,
      "question": "What is the capital of France?",
      "options": ["Berlin", "Madrid", "Rome", "Paris", "Lisbon"],
      "answer": "Paris"
    }, */}
            <div className="cbt-body">
                {/* Center - Question Area */}
                <div className="question-panel">
                    <div className="question-box">
                        <h3>Q{currentQuestion.id}. {currentQuestion.question}</h3>
                        <ul>
                            {currentQuestion.options && currentQuestion.options.map((option, index) => (
                                <li key={index} >
                                    <input
                                        type="radio"
                                        value={option}
                                        checked={userSelectedAnswer === option}
                                        onChange={handleChange}
                                        name={`question-${currentQuestion.id}`}
                                    />
                                    {option}
                                </li>
                            ))}

                        </ul>
                    </div>
                    <div className="navigation">
                        {getCurrentQuestionIndex() !== 0 && <button className="nav-btn" onClick={prev}>Previous</button>}
                        <button className="nav-btn" onClick={saveAndNext}>Save & Next</button>
                        {!!currentQuestion.selected && <button className="nav-btn" onClick={clear}>Clear</button>}
                        {<button className="nav-btn" onClick={markQuestion}>{`${currentQuestion.marked ? "Unmarked & Next" : "Marked & Next"}`}</button>}

                        {getCurrentQuestionIndex() + 1 == questionList.length && <button className="nav-btn" onClick={submit}>{`Submit`}</button>}
                    </div>
                </div>
                <div className="question-matrix-panel">
                    {/* Right - Question Matrix */}
                    <div className="question-matrix">
                        {questionList.map((num) => (
                            // <button key={num.id} className={`matrix-btn ${currentQuestion.className}`}>{num.id}</button>
                            <QuestionButton onClick={() => jump(num.id)} key={num.id} buttonType={num.buttonType} className={`matrix-btn`}>{num.id}</QuestionButton>
                        ))}
                    </div>
                    <div className="question-matrix-2">
                        <Answered > {questionList.filter(f => f.buttonType === ButtonType.answered).length} </Answered>
                        <VisitedNotAnswered > {questionList.filter(f => f.buttonType === ButtonType.no_answered).length} </VisitedNotAnswered>
                        <NoVisited > {questionList.filter(f => f.buttonType === ButtonType.no_answered).length} </NoVisited>
                        <MarkedAnswered > {questionList.filter(f => f.buttonType === ButtonType.mark_answered).length} </MarkedAnswered>
                        <MarkedNotAnswered > {questionList.filter(f => f.buttonType === ButtonType.mark_no_answered).length} </MarkedNotAnswered>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExamBoard;
