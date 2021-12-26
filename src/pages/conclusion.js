import NavButton from "../components/buttons/nav-button";
import Heart from "../assets/heart";
import profilepicture from "../assets/profilepicture.png";
import YoutubeLogo from "../assets/youtube-logo";
import Github from "../assets/github-logo";
import Twitter from "../assets/twitter-logo";
import Tiktok from "../assets/tiktok-logo";
import Producthunt from "../assets/producthunt-logo";

export default function Conclusion(props) {
  return (
    <div className="w-full space-y-6 m-auto">
      <div className="flex flex-col text-white text-3xl space-y-4 items-center ">
        <div className="flex flex-row space-x-3">
          <span className="my-auto">Built with</span>
          <Heart style={"w-10 h-10 my-auto"} />
          <span className="my-auto">by</span>
          <a
            target="_blank"
            href={"https://www.charliesweeting.com/"}
            rel="noopener noreferrer"
          >
            <img
              src={profilepicture}
              alt="charlie sweeting profile picture"
              className="h-10 w-10 object-cover rounded-full cursor-pointer"
            />
          </a>
        </div>
        <div className="flex flex-row space-x-3">
          <span className="my-auto">See the "making of" video</span>
          <YoutubeLogo style={"h-10 w-10 my-auto cursor-pointer"} />
          <span className="my-auto">View the code</span>
          <Github style={"h-10 w-10 my-auto cursor-pointer"} />
        </div>
        <div className="flex flex-row space-x-3">
          <span className="my-auto">See more of the project</span>
          <Twitter style={"h-10 w-10 my-auto cursor-pointer"} />
          <Tiktok style={"h-10 w-10 my-auto cursor-pointer"} />
          <Producthunt style={"h-10 w-10 my-auto cursor-pointer"} />
        </div>
      </div>
      <div className="flex justify-center ">
        <NavButton link="/" text="Back To Beginning" />
      </div>
    </div>
  );
}
