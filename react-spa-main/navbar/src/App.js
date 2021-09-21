import React, { useEffect } from "react";
import "./App.css";
import SideNav from "./components/SideNav";

function App(props) {
  console.log("navbar props", props);
  useEffect(() => {
    if (props.data) {
      console.log(props.data);
    }
  }, [props.data]);
  return (
    <div className="App">
      <SideNav />
    </div>
  );
}

export default App;
