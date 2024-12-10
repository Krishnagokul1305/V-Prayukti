import { useQuery } from "@tanstack/react-query";
import EventsNormal from "./EventsNormal";
import Hacks from "./Hacks";
import { getAllEvents } from "../../services/apiEvent";
import FallBackLoader from "../../components/FallBackLoader";
function Events() {
  const { data, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: getAllEvents,
  });
  if (isLoading) return <FallBackLoader />;
  return (
    <>
      <EventsNormal events={data} />
      <Hacks events={data}/>
    </>
  );
}

export default Events;
