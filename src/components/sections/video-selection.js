import Video from "../widgets/video";

export default function VideoSet(props) {
  return <div className="flex flex-row space-x-6 justify-center ">
    {props.data.map((info, idx) => (
          <div key={idx}>
             <Video height="135" width="240" style="" id={info[0]} />
          </div>
        ))}
  </div>;
}
