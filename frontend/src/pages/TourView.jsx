import { useParams } from "react-router-dom";
import { useState } from "react";
import { tours } from "../data/tours";

export default function TourView() {
  const { tourId } = useParams();
  const tour = tours.find((t) => t.id === tourId);

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  if (!tour) return <p className="p-6">Tour not found</p>;

  const handleAnswer = (index) => {
    const copy = [...answers];
    copy[current] = index;
    setAnswers(copy);
  };

  const total = tour.questions.length;
  const score = answers.filter((a, i) => a === tour.questions[i].answer).length;

  const percentage = Math.round((score / total) * 100);
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  /* ---------- Share ---------- */
  const shareText = `🌿 I completed the "${tour.title}" tour!\nScore: ${score}/${total} (${percentage}%)`;

  const shareLink = window.location.href;

  const shareNative = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "My Herbal Tour Progress",
        text: shareText,
        url: shareLink,
      });
    } else {
      alert("Sharing not supported on this device");
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">{tour.title}</h1>

      {!submitted ? (
        <>
          <p className="mb-4 font-medium">
            Question {current + 1} / {total}
          </p>

          <p className="mb-4">{tour.questions[current].q}</p>

          <div className="space-y-2">
            {tour.questions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className={`w-full p-3 border rounded-lg text-left ${
                  answers[current] === i
                    ? "bg-green-100 border-green-600"
                    : "hover:bg-gray-100"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <button
              disabled={current === 0}
              onClick={() => setCurrent(current - 1)}
              className="px-4 py-2 border rounded"
            >
              Back
            </button>

            {current === total - 1 ? (
              <button
                onClick={() => setSubmitted(true)}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={() => setCurrent(current + 1)}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Next
              </button>
            )}
          </div>
        </>
      ) : (
        /* ================= RESULT VIEW ================= */
        <div className="text-center mt-10">
          <h2 className="text-xl font-semibold mb-4">Your Progress</h2>

          {/* ===== PIE CHART ===== */}
          <div className="flex justify-center mb-6">
            <svg width="180" height="180">
              <circle
                cx="90"
                cy="90"
                r={radius}
                stroke="#e5e7eb"
                strokeWidth="14"
                fill="none"
              />
              <circle
                cx="90"
                cy="90"
                r={radius}
                stroke="#16a34a"
                strokeWidth="14"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                transform="rotate(-90 90 90)"
              />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="text-xl font-bold fill-green-700"
              >
                {percentage}%
              </text>
            </svg>
          </div>

          <p className="text-lg font-medium">
            Score: {score} / {total}
          </p>

          {/* ===== SHARE SECTION ===== */}
          {/* ===== SHARE SECTION ===== */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold mb-5 text-gray-700">
              🎉 Share your achievement
            </h3>

            <div className="flex justify-center gap-6">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  shareText + " " + shareLink,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-green-500/20 backdrop-blur-md flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-green-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-7 h-7 fill-green-600"
                  >
                    <path d="M19.11 17.71c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
                    <path d="M16 3C9.38 3 4 8.38 4 15c0 2.65.87 5.1 2.34 7.08L4 29l7.1-2.29C13.01 27.42 14.48 28 16 28c6.62 0 12-5.38 12-12S22.62 3 16 3zm0 22c-1.33 0-2.63-.35-3.77-1.01l-.27-.16-4.21 1.36 1.37-4.1-.18-.28C7.33 19.58 6.9 17.31 6.9 15 6.9 9.99 10.99 5.9 16 5.9S25.1 9.99 25.1 15 21.01 25 16 25z" />
                  </svg>
                </div>
                <span className="text-sm mt-2 text-gray-600">WhatsApp</span>
              </a>

              {/* Twitter / X */}
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  shareText,
                )}&url=${encodeURIComponent(shareLink)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-gray-400">
                  <span className="text-xl font-bold text-black">𝕏</span>
                </div>
                <span className="text-sm mt-2 text-gray-600">Twitter</span>
              </a>

              {/* Copy Link */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shareText + " " + shareLink);
                  alert("🔗 Link copied!");
                }}
                className="group flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-gray-300/30 backdrop-blur-md flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110">
                  <span className="text-xl">🔗</span>
                </div>
                <span className="text-sm mt-2 text-gray-600">Copy</span>
              </button>

              {/* Native Share */}
              <button
                onClick={shareNative}
                className="group flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-green-700/20 backdrop-blur-md flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-green-400">
                  <span className="text-xl text-green-700">🚀</span>
                </div>
                <span className="text-sm mt-2 text-gray-600">Other</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
