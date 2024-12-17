import { useQuery } from "@tanstack/react-query";
import EventsNormal from "./EventsNormal";
import { getAllEvents } from "../../services/apiEvent";
import FallBackLoader from "../../components/FallBackLoader";
import Combos from "./Combos";
function Events() {
  const { data, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: getAllEvents,
  });
  if (isLoading) return <FallBackLoader />;
  return (
    <>
      <EventsNormal events={data} />
      <Combos/>
    </>
  );
}

export default Events;
