import { useNavigate } from "react-router-dom";

function List({ onClose, setAgree, rules, event }) {
  const navigate = useNavigate();
  function handleAgree() {
    setAgree(true);
    const params = new URLSearchParams({
      name: event?.name,
      teamSize: event?.team_count,
      id: event?.id,
    });
    navigate(`/register?${params.toString()}`);
    onClose();
  }
  return (
    <div className="mt-3">
      <div
        dangerouslySetInnerHTML={{ __html: rules }}
        className="list text-xl"
      ></div>
      <button
        className="px-8 text-xl py-2 mt-3 rounded-full bg-secondary overflow-hidden text-white ms-auto block"
        onClick={() => handleAgree()}
      >
        Agree & Proceed
      </button>
    </div>
  );
}

export default List;
