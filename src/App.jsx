import axios from "axios";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import AllQuestions from "./Components/AllQuestions";
import Intro from "./Components/Intro";

export default function App() {
  const [queData, setQueData] = useState([]);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => {
        setQueData(() => {
          return res.data.results.map((item) => {
            return { ...item, id: nanoid() };
          });
        });
      });
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route
            path="/quiz"
            element={<AllQuestions queData={queData} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
