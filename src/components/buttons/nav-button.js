import { Link } from "react-router-dom";
import Arrow from "../../assets/arrow";

export default function NavButton(props) {
  return (
    <Link to={props.link}>
      <button className="flex flex-row bg-[#FF0000] text-white text-lg px-4 py-2 rounded-full space-x-3 ">
        {props.reverse && <Arrow style={"my-auto rotate-180"} />}
        <p>{props.text}</p>
        {!props.reverse && <Arrow style={"my-auto"} />}
      </button>
    </Link>
  );
}
