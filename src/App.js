/*global chrome*/
import "./App.css";
import { useState, useEffect } from "react";
import Landing from "./sections/landing";
import Fallback from "./sections/fallback";
import { tempData } from "./temp_data"; // Created and imported so I can develop on localhost with a hot reload
import { MemoryRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    setData(tempData);
    // chrome.history.search(
    //   {
    //     text: "",
    //     maxResults: 1000000, //defaults to 100, set arbitrarily high to get all results
    //     startTime: 1, // defaults to one day, this gets the full 3 onth history
    //   },
    //   function (results) {
    //     setData(results);
    //     console.log(results)
    //   }
    // );
  }, []);

  if (!data) {
    return <Fallback />;
  } 
  else {
    return (
      <MemoryRouter>
        <Routes>
          <Route exact path={"/"} element={<Landing data={data} />}/>
          <Route exact path={"/page1"} element={<Link to="/page2">to p2</Link>}/>
          <Route exact path={"/page2"} element={<Link to="/page3">to p3</Link>}/>
          <Route exact path={"/page3"} element={<Link to="/">to home</Link>} />
        </Routes>
      </MemoryRouter>
    );
  }
}
