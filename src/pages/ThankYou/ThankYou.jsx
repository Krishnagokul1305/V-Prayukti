import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getRegistration } from "../../services/apiRegister";
import FallBackLoader from "../../components/FallBackLoader";
import RegistrationDetails from "../../components/RegistrationDetails";

function ThankYou() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["registration", id],
    queryFn: () => getRegistration(id),
  });

  if (isLoading) return <FallBackLoader />;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 py-20">
      <div className="shadow-md rounded-lg p-1 md:p-6 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-4">
          Thank You for Registering!
        </h1>
        <p className="text-center text-lg mb-6">
          Your registration has been received.{" "}
          <span className="text-red-500">(&#35; Note your Application ID)</span>
        </p>
        <RegistrationDetails data={data} />
        <button
          onClick={() => navigate("/events")}
          className="ms-auto block py-2 px-4 bg-secondary text-lg text-white rounded-lg hover:bg-secondary/80 transition duration-200"
        >
          Go to Events
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
