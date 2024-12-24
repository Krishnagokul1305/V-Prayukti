function ProblemStatementsIot() {
  const categories = [
    {
      id: 1,
      name: "Health care",
      problems: [
        "IoT driven GPS Ambulance tracking for traffic-free transit",
        "IoT-Based Elderly Care Monitoring System",
        "Real-time Guidance Assistant for Physically Disabled and Blind Individuals",
      ],
    },
    {
      id: 2,
      name: "Automation",
      problems: [
        "Smart Home Advancement for Automated Living",
        "IoT-based Automatic Movable Dustbins",
        "Fire Extinguishing Robot",
      ],
    },
    {
      id: 3,
      name: "Sustainability",
      problems: [
        "IoT-integrated Intelligent Energy Management System for a Sustainable Future",
        "IoT-enabled Water Management System for Smarter Homes",
        "Industrial Harmful Gas Detection and Safety",
      ],
    },
    {
      id: 4,
      name: "Environmental",
      problems: [
        "IoT-Driven Precision Agriculture with Farming Solutions",
        "Marine Litter Detection and Removal",
        "Smart Wildlife Surveillance for Anti-Poaching",
      ],
    },
  ];

  let counter = 1;

  return (
    <div className="p-5 mx-auto max-w-6xl min-h-screen md:mt-10">
      <h1 className="text-xl md:text-4xl font-bold text-gold uppercase tracking-wider mb-10 items-center gap-2 flex flex-col md:flex-row">
        Problem Statements <span className="md:text-lg text-base">(Themes but not limited)</span>
      </h1>
      <ul className="rounded-xl mx-auto">
        {categories.map((category) => (
          <li
            key={category.id}
            className="flex flex-col py-6 md:px-8 px-2 bg-stone-900/60 border-t hover:bg-secondary hover:text-white transition-all border-gray-500/20 text-crimson"
          >
            <div className="ml-6 md:text-2xl text-lg">
              <span className="md:text-3xl text-xl font-bold text-gold w-5 md:w-12 me-2">
                {category.id}.
              </span>
              {category.name}
            </div>
            <ul className="ml-8 list-disc">
              {category.problems.map((problem, index) => {
                const problemId = `IOT-PS${counter++}`;
                return (
                  <li key={index} className="py-3">
                    <span className="text-lg">
                      {problemId} - {problem}
                    </span>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProblemStatementsIot;
