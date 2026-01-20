import { useState } from "react";

const quizData = [
  {
    title: "Immunity Boost",
    questions: [
      { question: "Which plant is known for boosting immunity?", options: ["Tulsi", "Neem", "Aloe Vera", "Ashwagandha"], answer: "Tulsi" },
      { question: "Tulsi belongs to which AYUSH system?", options: ["Unani", "Ayurveda", "Siddha", "Homeopathy"], answer: "Ayurveda" },
      { question: "Which plant is commonly used to purify blood?", options: ["Neem", "Tulsi", "Amla", "Brahmi"], answer: "Neem" },
      { question: "Which vitamin is abundant in Amla?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: "Vitamin C" },
    ],
  },
  {
    title: "Mental Wellness",
    questions: [
      { question: "Which plant helps reduce stress and anxiety?", options: ["Neem", "Ashwagandha", "Tulsi", "Aloe Vera"], answer: "Ashwagandha" },
      { question: "Brahmi is mainly used for?", options: ["Digestive health", "Memory enhancement", "Skin care", "Immunity"], answer: "Memory enhancement" },
      { question: "Which herb is known as a brain tonic?", options: ["Tulsi", "Neem", "Brahmi", "Amla"], answer: "Brahmi" },
    ],
  },
  {
    title: "Digestive Health",
    questions: [
      { question: "Which plant aids digestion and gut health?", options: ["Ginger", "Neem", "Tulsi", "Brahmi"], answer: "Ginger" },
      { question: "Triphala is a combination of how many fruits?", options: ["2", "3", "4", "5"], answer: "3" },
      { question: "Which fruit is commonly used for constipation relief?", options: ["Amla", "Haritaki", "Tulsi", "Neem"], answer: "Haritaki" },
    ],
  },
  {
    title: "Skin & Hair Care",
    questions: [
      { question: "Which plant is best known for skin hydration?", options: ["Neem", "Aloe Vera", "Tulsi", "Ashwagandha"], answer: "Aloe Vera" },
      { question: "Neem is commonly used to treat?", options: ["Acne", "Diabetes", "Fever", "Headache"], answer: "Acne" },
      { question: "Which herb has antibacterial properties for skin?", options: ["Brahmi", "Neem", "Amla", "Ginger"], answer: "Neem" },
    ],
  },
  {
    title: "General AYUSH Knowledge",
    questions: [
      { question: "AYUSH stands for?", options: ["Ayurveda, Yoga, Unani, Siddha, Homeopathy", "Ayurveda, Yoga, Unani, Surgery, Homeopathy", "Ayurveda, Youth, Unani, Siddha, Homeopathy", "None of the above"], answer: "Ayurveda, Yoga, Unani, Siddha, Homeopathy" },
      { question: "Which system focuses on balance of Doshas?", options: ["Unani", "Ayurveda", "Homeopathy", "Yoga"], answer: "Ayurveda" },
      { question: "Which therapy uses natural substances in minute doses?", options: ["Ayurveda", "Unani", "Homeopathy", "Siddha"], answer: "Homeopathy" },
    ],
  },
];

export default function GuidedTours() {
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // Start Screen
  if (!activeQuiz) {
    return (
      <div className="p-10 min-h-screen relative bg-gradient-to-br from-green-950 via-green-900 to-green-800">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)] text-center tracking-wide">
          🌿 Guided Quizzes
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizData.map((quiz, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform border border-white/20"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">{quiz.title}</h2>
              <button
                onClick={() => {
                  setActiveQuiz(quiz);
                  setCurrentQ(0);
                  setScore(0);
                  setSelected(null);
                  setShowResult(false);
                }}
                className="mt-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-2xl shadow-md transition transform hover:scale-[1.02]"
              >
                Start Quiz →
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const question = activeQuiz.questions[currentQ];

  const handleOptionClick = (option) => {
    if (selected) return;
    setSelected(option);
    if (option === question.answer) setScore((prev) => prev + 1);

    setTimeout(() => {
      if (currentQ + 1 < activeQuiz.questions.length) {
        setCurrentQ((prev) => prev + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 800);
  };

  // Result Screen
  if (showResult) {
    const total = activeQuiz.questions.length;
    const percentage = Math.round((score / total) * 100);

    return (
      <div className="p-10 min-h-screen flex flex-col items-center justify-center space-y-6 bg-gradient-to-br from-green-950 via-green-900 to-green-800">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">🌿 Quiz Result</h1>
        <p className="text-2xl font-semibold text-white/90">Score: {score} / {total}</p>
        <p className="text-xl font-medium text-white/80">Percentage: {percentage}%</p>
        <button
          onClick={() => setActiveQuiz(null)}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-2xl shadow-md transition transform hover:scale-[1.02]"
        >
          Back to Quizzes
        </button>
      </div>
    );
  }

  // Question Screen
  return (
    <div className="p-10 max-w-3xl mx-auto min-h-screen">
      <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-lg border border-white/20">
        <h2 className="text-2xl font-semibold mb-6 text-white drop-shadow-md">{question.question}</h2>
        <div className="space-y-4">
          {question.options.map((option) => {
            let bg = "bg-white/20 text-white";
            if (selected) {
              if (option === question.answer) bg = "bg-green-300/80 text-gray-900";
              else if (option === selected) bg = "bg-red-300/80 text-gray-900";
            }

            return (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`${bg} w-full text-left p-4 rounded-2xl border border-white/20 shadow hover:shadow-md transition transform hover:scale-[1.01]`}
              >
                {option}
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-white/90 font-medium">
          Question {currentQ + 1} of {activeQuiz.questions.length}
        </p>
      </div>
    </div>
  );
}
