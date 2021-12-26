import NavBar from "../components/widgets/navbar";
import { topChannels } from "../functions/functions";

export default function TopChannel(props) {
  return (
    <div className="page-container">
      <h1 className="stat">
        {topChannels(props.data)[0][0]}
      </h1>
        
      <p className="text">
      {`is the channel page you’ve visited the most at ${topChannels(props.data)[0][1]} time(s)`}
      </p>
      <NavBar
        backwards={{ link: "/channelviews", text: "Previous", reverse: true }}
        forward={{ link: "/top3channels", text: "Next", reverse: false }}
      />
    </div>
  );
}
