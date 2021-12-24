import Spinner from "../assets/spinner"
import Title from "../components/widgets/yt-wrapped-title";

export default function Fallback() {
  return (
    <div className="h-[600px] w-[800px] bg-[#181818] p-6 overflow-y-auto">
      <Title/>
      <Spinner/>
      <p>You need to provide this extension access to your browsing history</p>
    </div>
  );
}
