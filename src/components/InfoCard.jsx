const InfoCard = ({ icon, title, value }) => {
  return (
    <div className="bg-grey-100 border border-secondary rounded-md p-4 grid grid-cols-[5rem_1fr] grid-rows-[auto_auto] gap-x-4 gap-y-1">
      <div className="flex items-center justify-center rounded-full aspect-square row-span-2 bg-secondary">
        <div className="w-8 h-8 text-white flex justify-center items-center">
          {icon}
        </div>
      </div>
      <h5 className="self-end text-xs font-semibold uppercase tracking-[0.4px] text-grey-400">
        {title}
      </h5>
      <p className="text-xl font-medium leading-none mt-2 text-grey-600">
        {value}
      </p>
    </div>
  );
};

export default InfoCard;
