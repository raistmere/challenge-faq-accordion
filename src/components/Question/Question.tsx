import { useState } from "react";
import style from "./Question.module.css";
import plusIcon from "../../../public/assets/images/icon-plus.svg";

interface Props {
    question : String;
    answer : String;
};

const Question = (props : Props) => {
    const [isHidden, setIsHidden] = useState(true);

    const changeHiddenState = () => {
        setIsHidden(prevState => !prevState);
    }

    if(isHidden === true)
    {
        return (

            <div className={style.wrapper}>
                <button className={style.questionBox} aria-label="open" onClick={changeHiddenState}>
                    <p>{props.question}</p>
                    <img src={plusIcon} alt="A Plus Icon" />
                </button>
                <div className={style.answerBox}>
                    <p className={style.hidden}>{props.answer}</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={style.wrapper}>
                <button className={style.questionBox} aria-label="close" onClick={changeHiddenState}>
                    <p>{props.question}</p>
                    <img src="src/assets/images/icon-minus.svg" alt="A Minus Icon" />
                </button>
                <div className={style.answerBox}>
                    <p>{props.answer}</p>
                </div>
            </div>
        )
    }
}

export default Question