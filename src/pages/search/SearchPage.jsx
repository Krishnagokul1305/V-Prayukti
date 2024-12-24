import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRegistration } from "../../services/apiRegister"; // Assuming this is where the function is located
import RegistrationDetails from "../../components/RegistrationDetails";
import toast from "react-hot-toast";
import FallBackLoader from "../../components/FallBackLoader";

function SearchPage() {
  const [applicationId, setApplicationId] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { isFetching } = useQuery({
    queryKey: ["registration", applicationId],
    queryFn: () => getRegistration(applicationId), // This can be used to fetch the data
    enabled: false, // Disable the automatic query execution
    onSuccess: (fetchedData) => {
      setData(fetchedData);
      setIsLoading(false);
    },
    onError: (err) => {
      setIsLoading(false);
    },
  });

  const handleSearchClick = async () => {
    if (!applicationId) {
      toast.error("Please enter a valid application ID.");
      return;
    }
    setSubmitted(true);
    setIsLoading(true);

    try {
      // Manually fetch the data on button click
      const result = await getRegistration(applicationId);
      setData(result); // Store fetched data
    } catch (err) {
      toast.error("Error fetching registration details."); // Handle error
    } finally {
      setIsLoading(false); // Reset loading state after the request
    }
  };

  if (isFetching) return <FallBackLoader />;

  return (
    <div className="mt-28 md:px-10 px-5">
      <div>
        <h1 className="text-center font-semibold text-xl md:text-[2.5vw]">
          Search Your Registration
        </h1>
        <div className="flex items-center mx-auto gap-2 max-w-xl mt-5 md:mt-10">
          <input
            type="text"
            placeholder="Enter your application id..."
            value={applicationId}
            onChange={(e) => setApplicationId(e.target.value)}
            className="w-full bg-stone-800 rounded-full border border-secondary/10 text-gray-100 px-4 py-3 text-lg placeholder-gray-400 focus:outline-none"
          />
          <button
            onClick={handleSearchClick}
            className="flex items-center justify-center px-4 py-4 bg-secondary text-white rounded-full shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-5 md:mt-10">
        {isLoading ? (
          <div className=" my-10 flex items-center justify-center">
            <svg viewBox="25 25 50 50" className="loader-wrapper ">
              <circle cx="50" cy="50" r="20"></circle>
            </svg>
          </div>
        ) : data ? (
          <RegistrationDetails data={data} />
        ) : (
          <div className="min-h-[40vh] text-lg md:text-2xl flex items-center justify-center">
            Haven&apos;t registered yet?
            <Link
              to={"/events"}
              className="underline ms-2 hover:text-secondary"
            >
              Register now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
