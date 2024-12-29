import { useState } from "react";

const FileUploader = ({ errors, setValue, setError, clearErrors }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Check file size (2MB = 2 * 1024 * 1024 bytes)
      if (file.size > 2 * 1024 * 1024) {
        setError("payment_proof", {
          type: "manual",
          message: "File size must be less than 2MB",
        });
        setFileName("");
        setValue("payment_proof", null); // Clear the file value
        return;
      }

      // Clear any previous error if the file is valid
      clearErrors("payment_proof");
      setValue("payment_proof", file);
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
    <div className="flex flex-col w-full md:mt-9">
      <label
        htmlFor="file-upload"
        className="flex items-center w-full justify-between px-6 py-3 text-white bg-secondary rounded-lg cursor-pointer hover:bg-secondary/80"
      >
        <span className="text-lg font-medium">Payment Proof image &lt;2mb</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 ml-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4-4m0 0l-4 4m4-4v12"
          />
        </svg>
      </label>
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />

      {fileName && <div className="text-sm text-gray-500 mt-2">{fileName}</div>}

      {errors.payment_proof && (
        <span className="text-sm text-red-500">
          {errors.payment_proof.message}
        </span>
      )}
    </div>
  );
};

export default FileUploader;
