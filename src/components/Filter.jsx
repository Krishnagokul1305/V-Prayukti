import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState(
    searchParams.get("type") || "technical"
  );
  const navigate = useNavigate();

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    const queryParam = new URLSearchParams({
      type: filter.toLowerCase(),
    }).toString();
    navigate(`?${queryParam}`);
  };

  return (
    <div className="flex items-center gap-1 px-1 text-white py-1 border border-secondary rounded-full text-xs xs:text-sm md:text-[1.2vw]">
      <div
        className={`px-5 py-3 rounded-full cursor-pointer transition-colors duration-300 ${
          activeFilter === "technical" ? "bg-secondary" : ""
        }`}
        onClick={() => handleFilterChange("technical")}
      >
        Technical
      </div>
      <div
        className={`px-5 py-3 rounded-full cursor-pointer transition-colors duration-300 ${
          activeFilter === "non-technical" ? "bg-secondary" : ""
        }`}
        onClick={() => handleFilterChange("non-technical")}
      >
        Non-Technical
      </div>
      <div
        className={`px-5 py-3 rounded-full cursor-pointer transition-colors duration-300 ${
          activeFilter === "Hackathons" ? "bg-secondary" : ""
        }`}
        onClick={() => handleFilterChange("Hackathons")}
      >
        Hacks
      </div>
    </div>
  );
}

export default Filter;
