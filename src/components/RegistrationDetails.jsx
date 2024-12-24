function RegistrationDetails({ data }) {
  let registrationDetails = [
    {
      label: "Application ID",
      value: data?.application_id || "Application_id",
    },
    { label: "Event ID", value: data?.event_id || "Event_id" },
    {
      label: "Team Leader Name",
      value: data?.team_leader_name || "team_leader_name",
    },
    {
      label: "Team Leader Email",
      value: data?.team_leader_email || "team_leader_email",
    },
    {
      label: "Team Leader Phone",
      value: data?.team_leader_phone || "team_leader_phone",
    },
    {
      label: "Department",
      value: data?.team_leader_department || "team_leader_department",
    },
    { label: "Year", value: data?.team_leader_year || "team_leader_year" },
    {
      label: "College",
      value: data?.team_leader_college || "team_leader_college",
    },
    { label: "Team Name", value: data?.team_name || "team_name" },
    { label: "Team Count", value: data?.team_count || "team_count" },
    {
      label: "Arrival Status",
      value: data?.arrival_status || "arrival_status",
    },
    { label: "Registered At", value: data?.registered_at || "registered_at" },
  ];

  if (data?.event_id != 1) {
    registrationDetails = [
      ...registrationDetails,
      {
        label: "Transaction ID",
        value: data?.transaction_id || "transaction_id",
      },
      {
        label: "Transaction Amount",
        value: data?.transaction_amount || "transaction_amount",
      },
    ];
  }

  if (data?.problem_statement) {
    registrationDetails.push({
      label: "Problem Statement",
      value: data.problem_statement,
    });
  }

  if (data?.status == "Rejected") {
    registrationDetails = [
      ...registrationDetails,
      {
        label: "Remarks",
        value: data?.remarks || "not valid",
      },
    ];
  }

  return (
    <div className="mb-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold my-8 flex flex-col md:flex-row items-center gap-3">
        Registration Details:
        <span
          className={`text-white px-3 w-fit py-1 rounded-md ${
            data?.status === "Pending"
              ? "bg-yellow-500"
              : data?.status === "Approved"
              ? "bg-green-500"
              : "bg-red-600"
          }`}
        >
          {data?.status}
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-3 md:gap-7">
        {registrationDetails.map((item, index) => (
          <div key={index} className="flex flex-col justify-between  pb-2">
            <span className="font-medium text-lg mb-2">{item.label}:</span>
            <span className="text-base p-3 bg-stone-800 rounded-md">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegistrationDetails;
