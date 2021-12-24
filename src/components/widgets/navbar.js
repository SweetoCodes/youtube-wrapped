import NavButton from "../buttons/nav-button";

export default function NavBar(props) {
  return (
    <div className="flex flex-row w-full mt-6 justify-between mx-auto max-w-[500px]">
       <NavButton
        link={props.backwards.link}
        text={props.backwards.text}
        reverse={props.backwards.reverse}
      />
      <NavButton
        link={props.forward.link}
        text={props.forward.text}
        reverse={props.forward.reverse}
      />
    </div>
  );
}
