import { useQuery } from "@tanstack/react-query";
import TicketCard from "../../components/ComboCard";
import { getCombos } from "../../services/apiEvent";
import FallBackLoader from "../../components/FallBackLoader";
import { parseEventDetails } from "../../utils/helper";

function Combos() {
  const { data, isLoading } = useQuery({
    queryKey: ["combos"],
    queryFn: getCombos,
  });
  if (isLoading) return <FallBackLoader />;

  const comboData = data.map((combo) => {
    return {
      id: combo.id,
      title: combo.name,
      amount: combo.fee,
      details: parseEventDetails(combo.short_name),
      size: "Hybrid",
      status: combo.status,
    };
  });

  return (
    <div className=" min-h-screen  max-w-7xl mx-auto mt-20 py-10">
      <h1 className="text-center text-xl font-bold text-secondary tracking-wider mb-4">
        Checkout our combos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 p-5 mt-10">
        {comboData.map((data) => (
          <TicketCard
            key={data.id}
            id={data.id}
            status={data.status}
            title={data.title}
            amount={data.amount}
            size={data.size}
            details={data.details}
            form={data.form}
          />
        ))}
      </div>
    </div>
  );
}

export default Combos;
