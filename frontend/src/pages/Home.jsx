import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Explore Medicinal Plants 🌱</h1>
        <p className="text-gray-700">
          Learn about AYUSH herbs with detailed information and visuals.
        </p>
      </div>
    </>
  );
}
