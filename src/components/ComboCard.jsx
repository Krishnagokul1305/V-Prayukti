import { FaArrowRight, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TicketCard = ({ id, title, amount, details, size, status }) => {
  const navigate = useNavigate();
  function handleClick() {
    const params = new URLSearchParams({
      name: title,
      teamSize: "Hybrid",
      id,
      fee: amount,
    });
    navigate(`/register?${params.toString()}`);
  }
  return (
    <div className="hover:-translate-y-2 flex flex-col h-full relative bg-accent bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-[0.1] border-secondary border-2 rounded-3xl px-14 pb-5 duration-500 mb-12 text-center text-lg active">
      <h6 className=" bg-secondary px-6 py-3 inline-block tracking-wide uppercase text-white font-bold text-xl rounded-b-md mb-3 leading-[1]">
        {title}
      </h6>

      <div className="ticket-icon mb-1">
        <img
          className="mx-auto"
          src="https://res.cloudinary.com/dvfbca8ej/image/upload/v1673269074/prayukti/staticAssets/ticket_cpyoyt.png"
          alt="Ticket Icon"
          width="100px"
          height="100px"
        />
      </div>

      <h2 className="ticket-price text-4xl text-white font-semibold tracking-wide leading-[1] my-3">
        {amount}
      </h2>

      <h2 className="ticket-price text-lg text-white font-semibold tracking-wide leading-[1] my-5">
        Mode : <span className="text-white">{size}</span>
      </h2>

      <div className="ticket-pricing-table-details">
        {details?.map((val, idx) => (
          <p key={idx} className="text-dimWhite mb-1 tracking-wide">
            <FaCheck className="inline-block mr-2 text-secondary" /> {val}
          </p>
        ))}
      </div>

      {status == "Active" ? (
        <button
          className="button w-4/5 mt-auto justify-center flex items-center mx-auto rounded-full border border-secondary py-2 px-5 overflow-hidden text-sm xs:text-base md:text-xl text-white/80  hover:text-white"
          onClick={handleClick}
        >
          Get Ticket <FaArrowRight className=" ml-2" />
        </button>
      ) : (
        <button className="button w-4/5 mt-auto justify-center flex items-center mx-auto rounded-full border border-secondary py-2 px-5 overflow-hidden text-sm xs:text-base md:text-xl text-white/80  hover:text-white">
          InActive
        </button>
      )}
    </div>
  );
};

export default TicketCard;
