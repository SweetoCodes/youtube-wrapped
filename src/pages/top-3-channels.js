import NavBar from "../components/widgets/navbar";
import Table from "../components/widgets/table";
import { topChannels } from "../functions/functions";

export default function Top3Channels(props) {
  return (
    <div className="page-container text">
      <Table data={topChannels(props.data).slice(1, 4)} rankStart={2} />
      <p className="text">are your next three most visited channel pages</p>
      <NavBar
        backwards={{ link: "/topchannel", text: "Previous", reverse: true }}
        forward={{ link: "/ytpopularity", text: "Next", reverse: false }}
      />
    </div>
  );
}
