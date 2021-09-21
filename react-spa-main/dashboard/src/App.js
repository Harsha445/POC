import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Developer from "./components/Developer";
import "./App.css";
export default function App(props) {
  useEffect(() => {
    console.log("dashboard props", props);
    if (props.getData) {
      props.getData("Dashboard intial load");
    }

  }, []);
  return (
    <div className="dashboard">

            <Developer getData={props.getData} />

    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}
