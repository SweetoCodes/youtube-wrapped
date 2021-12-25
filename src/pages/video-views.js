import NavBar from "../components/widgets/navbar";
import { videoViews } from "../functions/functions";

export default function VideoViews(props) {
  return (
    <div className="page-container">
      <h1 className="stat">
        {videoViews(props.data)}
      </h1>
      <p className="text">
        videos watched by you on Youtube in the past three months
      </p>
      <NavBar
        backwards={{ link: "/", text: "Previous", reverse: true }}
        forward={{ link: "/topvideo", text: "Next", reverse: false }}
      />
    </div>
  );
}
