function ProblemSelect({ register, errors, value }) {
  const problemStatements = [
    { id: 1, title: "Speech Emotion Recognition with librosa" },
    { id: 2, title: "AI-Driven Resume Shortlisting for Hiring" },
    { id: 3, title: "AI for Detecting and Managing Personal Stress Levels" },
    { id: 4, title: "Turning Handwritten Documents into Digital documents" },
    { id: 5, title: "Stock price Prediction" },
    { id: 6, title: "Image Super-Resolution Using GANs" },
    { id: 7, title: "Sign Language Translator for Public Use" },
    { id: 8, title: "Chatbot Assistance in Regional Languages" },
    { id: 9, title: "AI-Powered Community Food Sharing Platform" },
    { id: 10, title: "AI for Real-Time Fake News Detection" },
  ];

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="">Choose a Problem Statement</label>
      <select
        {...register("problem_statement", {
          required: "Please select a problem statement",
        })}
        defaultValue={value}
        className="rounded-lg w-full border border-secondary/10 bg-stone-800/50 px-4 py-4 focus:outline-none text-lg"
      >
        {problemStatements.map((item) => (
          <option
            key={item.id}
            value={`AL-PS${item.id}`}
            className="text-white bg-stone-900"
          >
            {item.title}
          </option>
        ))}
      </select>
      {errors?.problem_statement && (
        <p className="text-red-500 text-sm mt-2">
          {errors.problem_statement.message}
        </p>
      )}
    </div>
  );
}

export default ProblemSelect;
