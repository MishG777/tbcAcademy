import React, { useState } from "react";
import Header from "./components/Header";
import Partners from "./components/Partners";

import FreqAskedQuestions from "./components/FreqAskedQuestions";

import styles from "./styles/App.module.css";

function App() {
  const [page, setPage] = useState("page1");

  const pageHandler = (page) => {
    setPage(page);
  };

  return (
    <div className={styles.app}>
      <Header pageHandler={pageHandler} page={page} />
      {page === "page1" && <Partners />}
      {page === "page2" && <FreqAskedQuestions />}
    </div>
  );
}

export default App;
