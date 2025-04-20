import React from "react";
import "./Style.scss"; // external CSS for styling

export const VisitedNotAnswered = ({ children, onClick }) => {
    return (
        <div className={`btn-size ${ButtonType.no_answered}-wrapper `} onClick={onClick}>
            <div className="btn-size pentagon">{children}</div>
        </div>
    );
};

export const Answered = ({ children, onClick }) => {
    return (
        <div className={`btn-size ${ButtonType.answered}-wrapper`} onClick={onClick}>
            <div className="btn-size pentagon">{children}</div>
        </div>
    );
};

export const MarkedAnswered = ({ children, onClick }) => {
    return (
        <div className={`btn-size ${ButtonType.mark_answered}-wrapper marked-btn`} onClick={onClick}>
            <div className="btn-size">{children}</div>
            <div className="tick"></div>
        </div>
    );
};
export const MarkedNotAnswered = ({ children, onClick }) => {
    return (
        <div className={`btn-size ${ButtonType.mark_no_answered}-wrapper marked-btn`} onClick={onClick}>
            <div className="btn-size">{children}</div>
        </div>
    );
};
export const NoVisited = ({ children, onClick }) => {
    return (
        <div className={`btn-size ${ButtonType.no_visited}-wrapper`} onClick={onClick}>
            <div className="btn-size">{children}</div>
        </div>
    );
};

 const QuestionButton = (props) => {
    switch (props.buttonType) {
        case ButtonType.answered:
            return <Answered {...props} />
        case ButtonType.no_answered:
            return <VisitedNotAnswered {...props} />
        case ButtonType.mark_answered:
            return <MarkedAnswered {...props} />
        case ButtonType.mark_no_answered:
            return <MarkedNotAnswered {...props} />
        default:
            return <NoVisited  {...props} buttonType={ButtonType.no_visited}/>
    }
}
export default QuestionButton;

export const ButtonType = {
    mark_answered: "mark-answered",
    mark_no_answered: "mark-no-answered",
    answered: "answered",
    no_answered: "no-answered",
    no_visited: "no-visited"
}