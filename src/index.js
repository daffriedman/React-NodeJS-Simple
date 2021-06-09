import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const App = () => {
  const [serverData, setServerData] = useState(null);
  useEffect(() => {
    const apiGetter = async () => {
      const response = await axios.get("http://localhost:3001/api");
      console.log(response.data.message);
      setServerData(response.data.message);
    };
    apiGetter();
  });
  return <div>{serverData}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
