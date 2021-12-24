import Spinner from "../assets/spinner"
import Title from "../components/widgets/yt-wrapped-title";

export default function Fallback() {
  return (
    <div className="flex flex-col h-[600px] w-[800px] bg-[#181818] overflow-y-auto">
      <div className="my-auto space-y-10">
      <Title/>
      <Spinner/>
      <p className="text-white text-center text-xl max-w-[500px] mx-auto">You need to provide this extension access to your browsing history. If you can still see this, chances are something has gone wrong and you should reload the extension.</p>
    </div>
    </div>
  );
}
