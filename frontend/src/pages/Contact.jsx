import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Contact() {
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "6590660a-a139-4d20-bd63-1abcf48c4741");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully ✅");
        event.target.reset();
      } else {
        setResult("Something went wrong ❌");
      }
    } catch (error) {
      setResult("Network error ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 px-4">
      {/* Back Button - Top Left */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-6 left-6 flex items-center gap-2 text-white font-medium bg-green-800/80 px-4 py-2 rounded-lg hover:bg-green-900 transition z-50"
        type="button"
      >
        ← Back
      </button>

      {/* Centered Card */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-green-200">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-2">
            Contact Our Herbal Garden 🌿
          </h2>

          <p className="text-center text-green-600 mb-6">
            Reach out for herbal knowledge & guidance
          </p>

          <form onSubmit={onSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-600 focus:outline-none bg-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-600 focus:outline-none bg-white"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-600 focus:outline-none resize-none bg-white"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-green-700 to-emerald-600 hover:from-green-800 hover:to-emerald-700 transition duration-300 shadow-md"
            >
              Send Message 🌱
            </button>
          </form>

          {result && (
            <p className="text-center mt-4 text-sm font-medium text-green-700">
              {result}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
