import NavBar from "../components/widgets/navbar";
import Table from "../components/widgets/table";
import { siteViews, getYoutubeRank } from "../functions/functions";

export default function YTRanking(props) {
  return (
    <div className="page-container text">
      <Table data={siteViews(props.data).slice(0, 3)} rankStart={1} />
      <p className="text">{`Youtube ranks number ${getYoutubeRank(
        props.data
      )} out of the sites you visit by pageviews`}</p>
      <NavBar
        backwards={{ link: "/ytpopularity", text: "Previous", reverse: true }}
        forward={{ link: "/conclusion", text: "Next", reverse: false }}
      />
    </div>
  );
}
