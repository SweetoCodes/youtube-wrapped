export default function Table({ data, rankStart }) {
  return (
    <div className="flex flex-col mx-auto w-1/2">
        <div className="flex flex-row">
        <p className="w-10 text-left">#</p>
        <p className="w-[270px] text-left">Name</p>
        <p className="w-10 text-left">Views</p>
        </div>
        
      {data.map((info, idx) => (<div key={idx} className="">
        <hr className="my-2 w-full"></hr>
        <div className="flex flex-row">
          <p className="w-10 text-left">{idx+rankStart}</p>
          <p className="w-[270px] text-left">{info[0]}</p>
          <p className="w-10 text-left">{info[1]}</p>
        </div>
        </div>
      ))}
    </div>
  );
}
