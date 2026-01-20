import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700">
      {/* Navbar */}
      <Navbar />

      {/* Centered container */}
      <div className="flex justify-center items-center px-5 py-20  min-h-[80vh]">
        <div className="w-full max-w-md bg-white/15 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-green-200 mb-6">
            Contact Us
          </h2>

          {/* Form */}
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm mb-1 text-green-100">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-green-200 outline-none border border-white/20 focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1 text-green-100">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-green-200 outline-none border border-white/20 focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-1 text-green-100">
                Your Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-green-200 outline-none border border-white/20 resize-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 transition font-semibold py-3 rounded-xl text-lg shadow-lg"
            >
              Send Message 🌿
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
