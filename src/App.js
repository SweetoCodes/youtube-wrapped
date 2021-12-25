/*global chrome*/
import "./App.css";
import { useState, useEffect } from "react";
import { tempData } from "./temp_data"; // Created and imported so I can develop on localhost with a hot reload
import { MemoryRouter, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/landing";
import Fallback from "./pages/fallback";
import VideoViews from "./pages/video-views";
import TopVideo from "./pages/top-video";
import Top3Videos from "./pages/top-3-videos";
import ChannelViews from "./pages/channel-views";
import Conclusion from "./pages/conclusion";

// lastVisitTime: 1639860516543.5469
// title: "Reid Hoffman and Chamath Palihapitiya on Angel Investing and The Future of Venture - YouTube"
// typedCount: 0
// url: "https://www.youtube.com/watch?v=w-VDSQSHND8&ab_channel=VillageGlobal"
// visitCount: 3

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    setData(tempData);
  //   chrome.history.search(
  //     {
  //       text: "",
  //       maxResults: 1000000, //defaults to 100, set arbitrarily high to get all results
  //       startTime: 1, // defaults to one day, this gets the full 3 onth history
  //     },
  //     function (results) {
  //       setData(results);
  //       console.log(results)
  //     }
  //   );
  }, []);

  if (!data) {
    return <Fallback />;
  } else {
    return (
      <MemoryRouter>
        <div className="flex h-[600px] w-[800px] bg-[#181818] p-6 overflow-y-auto">
          <Routes>
            <Route exact path={"/"} element={<Landing data={data} />} />
            <Route exact path={"/videoviews"} element={<VideoViews data={data} />}/>
            <Route exact path={"/topvideo"} element={<TopVideo data={data} />}/>
            <Route exact path={"/top3videos"} element={<Top3Videos data={data} />}/>
            <Route exact path={"/channelviews"} element={<ChannelViews data={data} />}/>
            <Route exact path={"/conclusion"} element={<Conclusion />} />
          </Routes>
        </div>
      </MemoryRouter>
    );
  }
}
