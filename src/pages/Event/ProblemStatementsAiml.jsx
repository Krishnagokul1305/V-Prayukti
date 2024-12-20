function ProblemStatementsAiml() {
    const problemStatements = [
      { id: 1, title: "Speech Emotion Recognition with librosa" },
      { id: 2, title: "Own Python compiler using Django" },
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
      <div className="p-5 mx-auto max-w-6xl bg-black min-h-screen">
        <h1 className="text-xl md:text-4xl font-bold text-gold uppercase tracking-wider mb-10">
          Problem Statements
        </h1>
        <ul className="rounded-xl mx-auto">
          {problemStatements.map((item) => (
            <li
              key={item.id}
              className="flex items-center py-6 px-8 bg-stone-900/50 border-t hover:bg-secondary hover:text-white transition-all border-gray-500/20 text-crimson"
            >
              <span className="md:text-3xl text-xl font-bold text-gold w-5 md:w-12">
                {item.id}
              </span>
              <div className="ml-6 md:text-2xl text-lg">{item.title}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ProblemStatementsAiml;
  