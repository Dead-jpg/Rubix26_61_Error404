import { useParams } from "react-router-dom";
import { useState } from "react";
import { tours } from "../data/tours";
import { FaWhatsapp, FaTwitter, FaLink } from "react-icons/fa";

export default function TourJourney() {
  const { tourId } = useParams();
  const tour = tours.find((t) => t.id === tourId);

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!tour) return <p className="p-6">Tour not found</p>;

  const total = tour.questions.length;
  const progress = Math.round(((step + 1) / total) * 100);

  const score = Object.keys(answers).filter(
    (i) => answers[i] === tour.questions[i].answer,
  ).length;

  const handleSelect = (optionIndex) => {
    setAnswers({ ...answers, [step]: optionIndex });
  };

  const shareText = `I scored ${score}/${total} in the ${tour.title} Herbal Journey 🌿`;

  /* ------------------- UI ------------------- */
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{tour.title}</h1>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
        <div
          className="bg-green-600 h-2 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {!submitted ? (
        <>
          {/* Question */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">
              {tour.questions[step].q}
            </h2>

            <div className="space-y-3">
              {tour.questions[step].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left p-3 rounded-lg border transition ${
                    answers[step] === idx
                      ? "bg-green-100 border-green-500"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button
              disabled={step === 0}
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
            >
              ← Previous
            </button>

            {step < total - 1 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="px-4 py-2 rounded bg-green-600 text-white"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                className="px-4 py-2 rounded bg-green-700 text-white"
              >
                Submit Quiz
              </button>
            )}
          </div>
        </>
      ) : (
        /* ------------------- RESULT ------------------- */
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold mb-4">Your Progress</h2>

          {/* Circular Progress */}
          <div className="relative w-40 h-40 mx-auto mb-4">
            <svg className="w-full h-full">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="#e5e7eb"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="#16a34a"
                strokeWidth="12"
                fill="none"
                strokeDasharray="440"
                strokeDashoffset={440 - (440 * progress) / 100}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-green-600">
              {progress}%
            </div>
          </div>

          <p className="text-lg font-medium mb-6">
            Score: {score} / {total}
          </p>

          {/* Share Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/80 text-white"
            >
              <FaWhatsapp /> WhatsApp
            </a>

            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                shareText,
              )}`}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/80 text-white"
            >
              <FaTwitter /> Twitter
            </a>

            <button
              onClick={() => {
                navigator.clipboard.writeText(shareText);
                alert("Link copied!");
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200"
            >
              <FaLink /> Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
