import "./App.css";
import Question from "./components/Question/Question.tsx";

function App() {

  return (
    <div id="wrapper">
      <div className="faqBox">
        <div className="header">
          <img className="starIcon" src="src/assets/images/icon-star.svg" alt="A Star Icon" />
          <h1 className="title">FAQs</h1>
        </div>
        <div className="questionBox">
          <div className="questionText">What is FrontEnd Mentor, and how will it help me?</div>
          <img src="src/assets/images/icon-plus.svg" alt="A Plus Icon" />
        </div>
        <div className="questionBox">
          <div className="questionText">Is Frontend Mentor Free?</div>
          <img src="src/assets/images/icon-plus.svg" alt="A Plus Icon" />
        </div>
        <div className="questionBox">
          <div className="questionText">Can I use Frontend Mentor projects in my portfolio?</div>
          <img src="src/assets/images/icon-plus.svg" alt="A Plus Icon" />
        </div>
        <div className="questionBox">
          <div className="questionText">How can I get help if I'm stuck on a challenge?</div>
          <img src="src/assets/images/icon-plus.svg" alt="A Plus Icon" />
        </div>
      <Question />
      </div>
    </div>
  )
}

export default App
