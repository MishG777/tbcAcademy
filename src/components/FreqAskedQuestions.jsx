import React, { useState } from "react";
import { questions } from "../utils/questions.js";
import styles from "../styles/FreqAskedQuestions.module.css";

import { ChevronUp, ChevronDown } from "lucide-react";

const FreqAskedQuestions = () => {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const toggleAnswer = (questionId) => {
    setOpenQuestionId((prevId) => (prevId === questionId ? null : questionId));
  };

  return (
    <div className={styles.mainCont}>
      <div className={styles.innerCont}>
        <h1>ხშირად დასმული კითხვები</h1>
        <ul>
          {questions.map(({ id, question, answer }) => (
            <div className={styles.answQuestions}>
              <li key={id} onClick={() => toggleAnswer(id)}>
                <a className={styles.questions}>{question}</a>
                {id === openQuestionId ? <ChevronUp /> : <ChevronDown />}
              </li>
              {openQuestionId === id && (
                <h3 className={styles.answers}>{answer}</h3>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FreqAskedQuestions;
