import React, { useEffect } from "react";
import "./App.css";
import Project from "./components/Project";

function App(props) {
  console.log("project props", props);
  useEffect(() => {
    if (props.data) {
      console.log(props.data);
    }
  }, [props.data]);
  return (
    <div className="App">
      <Project />
    </div>
  );
}

export default App;