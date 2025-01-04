const PaperSubmission = () => {
  return (
    <div className="p-6  rounded-lg shadow-md max-w-xl mx-auto bg-stone-900/50">
      <h2 className="text-2xl font-bold mb-4">Paper Submission Details:</h2>
      <ul className="list-disc pl-5 text-xl space-y-2">
        <li>Paper should contain 1 - 5 pages of content.</li>
        <li>
          Paper submission deadline -{" "}
          <span className="font-semibold">20th January 2025</span>.
        </li>
        <li>
          The paper must be prepared in the{" "}
          <span className="font-bold">IEEE format</span> and follow the
          template:{" "}
          <a
            href="https://docs.google.com/document/d/1AZRr_b7_huLgrDdvnfHt_evoHdZXBy45/edit?usp=sharing&ouid=111562506663857940451&rtpof=true&sd=true"
            className="text-secondary underline"
            rel="no_rel"
            download
          >
            Template.docx
          </a>
          .
        </li>
      </ul>
    </div>
  );
};

export default PaperSubmission;
