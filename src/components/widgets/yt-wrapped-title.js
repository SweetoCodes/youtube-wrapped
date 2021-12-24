import YoutubeLogo from "../../assets/youtube-logo";

export default function Title(props) {
  return (
    <div className="flex flex-row justify-center space-x-4 align-middle">
      <YoutubeLogo style={"align-middle"} />
      <h1 className="text-6xl text-center text-white">Youtube Wrapped</h1>
    </div>
  );
}
