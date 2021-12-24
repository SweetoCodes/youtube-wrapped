import NavButton from "../components/buttons/nav-button";
import profilepicture from "../assets/profilepicture.png"

// Conclusion: Built by [me] with love, view the code here and the videos here.
export default function Conclusion(props) {
  return (
    <div className=" h-full w-full ">
      <div>Fin </div>
      <NavButton link="/" text="Back To Beginning" />
      <img></img>
      <img src={profilepicture} alt="charlie sweeting profile picture" className="h-20 w-20" />
    </div>
  );
}