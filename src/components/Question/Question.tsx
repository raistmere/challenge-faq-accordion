import { useState } from "react";
import style from "./Question.module.css";

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
                <div className={style.questionBox}>
                    <p>{props.question}</p>
                    <button aria-label="open" onClick={changeHiddenState}>
                        <img src="src/assets/images/icon-plus.svg" alt="A Plus Icon" />
                    </button>
                </div>
                <div className={style.answerBox}>
                    <p className={style.hidden}>{props.answer}</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={style.wrapper}>
                <div className={style.questionBox}>
                    <p>{props.question}</p>
                    <button aria-label="close" onClick={changeHiddenState}>
                        <img src="src/assets/images/icon-minus.svg" alt="A Minus Icon" />
                    </button>
                </div>
                <div className={style.answerBox}>
                    <p>{props.answer}</p>
                </div>
            </div>
        )
    }
}

export default Question