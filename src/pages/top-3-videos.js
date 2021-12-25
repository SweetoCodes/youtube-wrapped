import NavBar from "../components/widgets/navbar";
import VideoSet from "../components/sections/video-selection";
import { topVideos } from "../functions/functions";

export default function Top3Videos(props) {
  return (
    <div className="page-container">
      <VideoSet data={topVideos(props.data).slice(1, 4)}/>
       
      <p className="text">
        are your next 3 most watched videos
      </p>
      <NavBar
        backwards={{ link: "/topvideo", text: "Previous", reverse: true }}
        forward={{ link: "/channelviews", text: "Next", reverse: false }}
      />
    </div>
  );
}
