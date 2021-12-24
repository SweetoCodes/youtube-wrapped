import NavBar from "../components/widgets/navbar";
import { videoViews } from "../functions/functions";

export default function VideoViews(props) {
  return (
    <div className="w-full space-y-10 m-auto ">
      <h1 className="text-8xl text-center text-white">
        {videoViews(props.data)}
      </h1>
      <p className="text-3xl text-center text-white max-w-[500px] mx-auto">
        videos watched by you on Youtube in the past three months
      </p>
      <NavBar
        backwards={{ link: "/", text: "Previous", reverse: true }}
        forward={{ link: "/conclusion", text: "Next", reverse: false }}
      />
    </div>
  );
}
