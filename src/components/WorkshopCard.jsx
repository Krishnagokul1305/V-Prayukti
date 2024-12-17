import ReactPlayer from "react-player";

function WorkshopCard({ videoLink, title = "workshop" }) {
  return (
    <div className="max-w-sm bg-black text-white rounded-lg overflow-hidden shadow-md ">
      {/* React Player */}
      <div className="relative rounded-lg overflow-hidden">
        <ReactPlayer
          url={videoLink}
          width="100%"
          height="180px"
          style={{borderRadius:"15px"}}
          playing={false} // Video does not autoplay
          controls={false} // Disables all controls
          light 
        />
      </div>

      {/* Video Details */}
      <div className="p-2">
        <h3 className="text-lg font-semibold truncate">{title}</h3>
      </div>
    </div>
  );
}

export default WorkshopCard;
