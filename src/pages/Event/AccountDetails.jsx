import { HiClipboardList } from "react-icons/hi";

const AccountDetails = () => {
  const accountInfo = [
    { label: "Bank Name", value: "Axis Bank" },
    { label: "IFSC Code", value: "UTIB0000368" },
    { label: "Account Number", value: "911010036862582" },
    { label: "Account Name", value: "BIT – CENTRE FOR ADVANCED STUDIES" },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  return (
    <div className="max-w-sm mx-5 md:mx-auto bg-secondary shadow-lg rounded-lg p-6 border border-gray-300/50">
      <h2 className="text-lg font-bold text-center mb-4 text-gray-800">
        ACCOUNT DETAILS
      </h2>
      {accountInfo.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between mb-4 border-b border-gray-300/50 pb-2"
        >
          <div>
            <label className="block text-base font-semibold text-black">
              {item.label}
            </label>
            <p className="text-lg font-semibold text-stone-800">{item.value}</p>
          </div>
          <button
            onClick={() => copyToClipboard(item.value)}
            className="ml-4 bg-white text-black/50 p-1 rounded-md "
          >
            <HiClipboardList className="size-5"/>
          </button>
        </div>
      ))}
    </div>
  );
};

export default AccountDetails;
