import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const App = () => {
  const [serverData, setServerData] = useState(null);
  useEffect(() => {
    const apiGetter = async () => {
      const {data} = await axios.get("http://localhost:3001/api");
      console.log(data.message);
      setServerData(data.message);
    };
    apiGetter();
  });
  return <div>{serverData}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
