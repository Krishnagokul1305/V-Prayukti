function DetailsBox({ event }) {
  const detail = [
    {
      title: "Deadline",
      content: `${event.deadline}`,
    },
    {
      title: "Team size",
      content: `${event.team_count}`,
    },
    {
      title: "Fee",
      content: `${event.fee} `,
    },
    {
      title: "Participation",
      content: event?.domain
        ? event.domain
        : event.id == 9
        ? "Hybrid"
        : "Offline",
    },
  ];
  return (
    <div className="flex items-center justify-center z-10 mx-auto py-10">
      <ol className="list-disc md:flex gap-7 grid grid-cols-2 text-center">
        {detail.map((d) => (
          <li
            key={d.title}
            className="flex gap-1 flex-col md:flex-row "
          >
            <h1 className="text-xl md:text-[1.7vw]">{d.title} :</h1>
            <p className=" hover:text-secondary text-lg md:text-[1.5vw]">
              {d.content}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default DetailsBox;
