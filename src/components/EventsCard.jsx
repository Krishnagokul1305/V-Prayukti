import { useNavigate } from "react-router-dom";

function EventsCard({ img, title }) {
  const navigate = useNavigate();
  return (
    <div className=" border-secondary border-[0.01px] w-full hover:translate-y-[-10px] transition-all  md:max-w-[17rem] rounded-md overflow-hidden">
      <div className="relative ">
        <div className="relative card-picture  md:h-[270px] md:min-w-[250px] min-h-[100px] bg-transparent p-2">
          <img
            src={img}
            alt={title}
            className="card__picture-img  h-100 "
            loading="lazy"
          />
          <p className="text-lg text-center absolute">{title}</p>
        </div>
      </div>

      <div className="p-5 flex items-center justify-between">
        <button
          className="button w-full px-5 py-3 border flex items-center border-secondary rounded-full text-white text-lg gap-5 hover:before:bg-redborder-red-500 relative overflow-hidden bg-transparent transition-all "
          onClick={() => navigate(`/events/${title}`)}
        >
          <span className="relative z-30 flex items-center gap-2 text-base mx-auto">
            Read More
          </span>
        </button>
      </div>
    </div>
  );
}

export default EventsCard;
