import { useParams } from "react-router-dom";
import HeroSection from "./HeroSection";
import Details from "./Details";
import Register from "./Register";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getEvent } from "../../services/apiEvent";
import FallBackLoader from "../../components/FallBackLoader";
import AccountDetails from "./AccountDetails";

function EventPage() {
  const params = useParams();
  let [conditionsAccepted, setConditionsAccepted] = useState(false);
  const { data, isLoading } = useQuery({
    queryKey: ["events", params.id],
    queryFn: () => getEvent(params.id),
  });

  function setApprove() {
    setConditionsAccepted(true);
  }
  if (isLoading) return <FallBackLoader />;
  return (
    <div className="space-y-10">
      <HeroSection
        event={data}
        setCondition={setApprove}
        isAgreed={conditionsAccepted}
      />
      <Details event={data} />
      <div id="register">
        {conditionsAccepted && (
          <>
            <AccountDetails />
            <Register
              name={data.name}
              teamSize={data.team_count}
              id={data.id}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default EventPage;
