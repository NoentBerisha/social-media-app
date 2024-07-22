import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import ForgotPassword from "./components/auth/ForgotPassword";
import Main from "./components/auth/Main/Main";
import "./App.css";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const buttonRef = useRef(null);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  useEffect(() => {
    const button = buttonRef.current;
    let offsetX = 0;
    let offsetY = 0;


  button.style.position = 'absolute';
  button.style.top = '10px';
  button.style.left = '10px';

    const mouseDownHandler = function (e) {
      offsetX = e.clientX - button.getBoundingClientRect().left;
      offsetY = e.clientY - button.getBoundingClientRect().top;

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
    };
    const mouseMoveHandler = function (e) {
      button.style.left = `${e.clientX - offsetX}px`;
      button.style.top = `${e.clientY - offsetY}px`;
    };

    const mouseUpHandler = function () {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };

    button.addEventListener("mousedown", mouseDownHandler);

    return () => {
      button.removeEventListener("mousedown", mouseDownHandler);
    };
  }, []);

  return (
    <>
     
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </Router>
      <button
        ref={buttonRef}
        onDoubleClick={toggleTheme}
        className="theme-toggle-btn"
        title="
       Click and drag to move,
      Double click to switch between modes"
      >
        {theme === "light" ? (
          <FaMoon className="icon" />
        ) : (
          <FaSun className="icon" />
        )}
      </button>
    </>
  );
}

export default App;
