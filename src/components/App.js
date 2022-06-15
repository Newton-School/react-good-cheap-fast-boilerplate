import React, { useRef } from "react";
import "../styles/App.css";

const App = () => {

  const changeHandler = (event) => {

  };

  return (
    <div id="main">
      <h1>How do you want your project to be?</h1>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="good"
          className="toggle"
          onChange={changeHandler}
        />
        <label htmlFor="good" id="good-label" className="label">
          <div className="circle"></div>
        </label>
        <span>Good</span>
      </div>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="cheap"
          className="toggle"
          onChange={changeHandler}
        />
        <label htmlFor="cheap" id="cheap-label" className="label">
          <div className="circle"></div>
        </label>
        <span>Cheap</span>
      </div>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="fast"
          className="toggle"
          onChange={changeHandler}
        />
        <label htmlFor="fast" id="fast-label" className="label">
          <div className="circle"></div>
        </label>
        <span>Fast</span>
      </div>
    </div>
  );
};

export default App;
