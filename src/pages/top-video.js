import NavBar from "../components/widgets/navbar";
import Video from "../components/widgets/video";
import { topVideos } from "../functions/functions";

export default function TopVideo(props) {
  return (
    <div className="page-container">
        <Video height="338" width="600" style="mx-auto" id={topVideos(props.data)[0][0]} />
      <p className="text">
      {`is your top video, watched by you ${topVideos(props.data)[0][1]} time(s)`}
      </p>
      <NavBar
        backwards={{ link: "/videoviews", text: "Previous", reverse: true }}
        forward={{ link: "/top3videos", text: "Next", reverse: false }}
      />
    </div>
  );
}
