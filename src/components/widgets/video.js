export default function Video(props) {
  return (
    <iframe
      className={props.style}
      width={props.width}
      height={props.height}
      src={`https://www.youtube.com/embed/${props.id}`}
    ></iframe>
  );
}
