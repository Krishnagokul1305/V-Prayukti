import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getRegistration } from "../../services/apiRegister";
import FallBackLoader from "../../components/FallBackLoader";

function ThankYou() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["registration", id],
    queryFn: () => getRegistration(id),
  });

  if (isLoading) return <FallBackLoader />;
  // console.log(data);
  const registrationDetails = [
    { label: "Application ID", value: data.application_id },
    { label: "Event ID", value: data.event_id },
    { label: "Team Leader Name", value: data.team_leader_name },
    { label: "Team Leader Email", value: data.team_leader_email },
    { label: "Team Leader Phone", value: data.team_leader_phone },
    { label: "Department", value: data.team_leader_department },
    { label: "Year", value: data.team_leader_year },
    { label: "College", value: data.team_leader_college },
    { label: "Team Name", value: data.team_name },
    { label: "Team Count", value: data.team_count },
    { label: "Transaction Amount", value: data.transaction_amount },
    { label: "Payment Status", value: data.payment_status },
    { label: "Arrival Status", value: data.arrival_status },
    { label: "Registered At", value: data.registered_at },
    { label: "Transaction ID", value: data.transaction_id },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 py-20">
      <div className="shadow-md rounded-lg p-1 md:p-6 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6">
          Thank You for Registering!
        </h1>
        <p className="text-center text-lg mb-6">
          Your registration has been received. Below are your details:
        </p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Registration Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {registrationDetails.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between border-b pb-2"
              >
                <span className="font-medium text-lg">{item.label}:</span>
                <span className="text-base">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
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
