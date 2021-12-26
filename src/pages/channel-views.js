import NavBar from "../components/widgets/navbar";
import { uniqueChannelViews } from "../functions/functions";

export default function ChannelViews(props) {
  return (
    <div className="page-container">
      <h1 className="stat">
        {uniqueChannelViews(props.data)}
      </h1>
      <p className="text">
      unique channel pages viewed by you on Youtube in the past three months
      </p>
      <NavBar
        backwards={{ link: "/top3videos", text: "Previous", reverse: true }}
        forward={{ link: "/topchannel", text: "Next", reverse: false }}
      />
    </div>
  );
}
