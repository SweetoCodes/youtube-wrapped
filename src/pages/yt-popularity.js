import NavBar from "../components/widgets/navbar";
import { viewYoutubePercentage } from "../functions/functions";

export default function YTPopularity(props) {
  return (
    <div className="page-container">
      <h1 className="stat">{viewYoutubePercentage(props.data)}%</h1>
      <p className="text">of your website visits have been to Youtube videos</p>
      <NavBar
        backwards={{ link: "/top3channels", text: "Previous", reverse: true }}
        forward={{ link: "/ytranking", text: "Next", reverse: false }}
      />
    </div>
  );
}
