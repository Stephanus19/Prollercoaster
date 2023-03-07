import { useEffect, useState } from "react";
import Construct from "./Construct.js";
import ErrorNotification from "./ErrorNotification";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginModal";
import { useGetTokenQuery } from "./store/api.js";
import Nav from "./Nav";
import HomePage from "./HomePage";

function App() {
  const [launch_info, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      let url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/launch-details`;
      let response = await fetch(url);
      let data = await response.json();

      if (response.ok) {
        setLaunchInfo(data.launch_details);
      } else {
        setError(data.message);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <ErrorNotification error={error} />
      {/* <Construct info={launch_info} /> */}
      <BrowserRouter>
        <Nav />
        <div className="container">
        <Routes>
          <Route path="" element={<HomePage />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
