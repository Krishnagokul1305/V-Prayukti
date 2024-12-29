import { useState } from "react";

function ProblemSelectIOT({ register, setValue, errors }) {
  const [selectedProblem, setSelectedProblem] = useState("");
  const [customProblem, setCustomProblem] = useState("");

  const problems = [
    {
      id: 1,
      statement: "IoT driven GPS Ambulance tracking for traffic-free transit",
    },
    { id: 2, statement: "IoT-Based Elderly Care Monitoring System" },
    {
      id: 3,
      statement:
        "Real-time Guidance Assistant for Physically Disabled and Blind Individuals",
    },
    { id: 4, statement: "Smart Home Advancement for Automated Living" },
    { id: 5, statement: "IoT-based Automatic Movable Dustbins" },
    { id: 6, statement: "Fire Extinguishing Robot" },
    {
      id: 7,
      statement:
        "IoT-integrated Intelligent Energy Management System for a Sustainable Future",
    },
    {
      id: 8,
      statement: "IoT-enabled Water Management System for Smarter Homes",
    },
    { id: 9, statement: "Industrial Harmful Gas Detection and Safety" },
    {
      id: 10,
      statement: "IoT-Driven Precision Agriculture with Farming Solutions",
    },
    { id: 11, statement: "Marine Litter Detection and Removal" },
    { id: 12, statement: "Smart Wildlife Surveillance for Anti-Poaching" },
    { id: 13, statement: "Open (custom statement)" },
  ];

  const handleProblemChange = (e) => {
    const selectedId = e.target.value;
    setSelectedProblem(selectedId);
    setValue("problem_id", selectedId);

    // For non-custom problems, set the problem as "IOT - PS{id}"
    if (selectedId !== "13") {
      setValue("custom_problem", "");
      setValue("problem_statement", `IOT-PS${selectedId}`); // Set problem code for other problems
    }
  };

  const handleCustomProblemChange = (e) => {
    const customText = e.target.value;
    setCustomProblem(customText);

    // For custom problem, set the problem as "IOT - OS-{custom statement}"
    if (selectedProblem === "13" && customText) {
      setValue("problem_statement", `IOT-OS-${customText}`);
    } else {
      setValue("problem_statement", ""); // Clear the problem code if there's no custom problem
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <label>Problem Statement</label>
      <select
        {...register("problem_id", {
          required: "Please select a problem statement",
        })}
        className="rounded-lg w-full border border-secondary/10 bg-stone-800/50 px-4 py-4 focus:outline-none text-lg"
        onChange={handleProblemChange}
      >
        {problems.map((problem) => (
          <option key={problem.id} className="text-white bg-stone-900" value={problem.id}>
            {problem.statement}
          </option>
        ))}
      </select>
      {errors?.problem_id && (
        <p className="text-red-500 text-sm mt-1">
          {errors.problem_id?.message}
        </p>
      )}

      {selectedProblem === "13" && (
        <div className="mt-4">
          <label className="mb-4">Custom Problem Statement</label>
          <input
            {...register("custom_problem", {
              required: "Custom problem statement is required",
            })}
            className="rounded-lg w-full border border-secondary/10 bg-stone-800/50 px-4 py-4 focus:outline-none text-lg"
            placeholder="Enter your custom problem statement"
            value={customProblem}
            onChange={handleCustomProblemChange}
          />
          {errors?.custom_problem && (
            <p className="text-red-500 text-sm mt-1">
              {errors.custom_problem?.message}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default ProblemSelectIOT;
