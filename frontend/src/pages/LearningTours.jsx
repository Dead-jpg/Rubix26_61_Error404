import { Link } from "react-router-dom";

export default function LearningTours() {
  return (
    <div className="p-8 space-y-14">
      {/* HEADER */}
      <section>
        <h1 className="text-3xl font-bold text-green-800">
          Guided Learning Tours 🌿
        </h1>
        <p className="mt-3 text-gray-700 max-w-4xl">
          These guided tours help users explore medicinal plants in a
          structured, theme-based manner. Each tour groups plants based
          on health benefits, traditional AYUSH knowledge, and real-world
          applications.
        </p>
      </section>

      {/* TOUR CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TourCard
          title="🌿 Immunity Boost Tour"
          description="Plants traditionally used to strengthen immunity and prevent common illnesses."
          points={[
            "Tulsi – boosts immunity and respiratory health",
            "Giloy – immunity enhancer and detoxifier",
            "Amla – rich source of Vitamin C",
            "Neem – antibacterial and antiviral properties",
          ]}
          link="/dashboard/plants"
        />

        <TourCard
          title="🧠 Mental Wellness Tour"
          description="Medicinal plants known for reducing stress, anxiety, and improving mental clarity."
          points={[
            "Ashwagandha – reduces stress and anxiety",
            "Brahmi – enhances memory and focus",
            "Jatamansi – calming and sleep support",
            "Shankhpushpi – mental relaxation",
          ]}
          link="/dashboard/plants"
        />

        <TourCard
          title="🍽 Digestive Health Tour"
          description="Herbs that support digestion, gut health, and metabolism."
          points={[
            "Ajwain – relieves indigestion",
            "Saunf – improves digestion",
            "Triphala – gut cleanser",
            "Hing – reduces bloating",
          ]}
          link="/dashboard/plants"
        />

        <TourCard
          title="✨ Skin & Hair Care Tour"
          description="Natural herbs used in skincare and haircare remedies."
          points={[
            "Aloe Vera – skin hydration and healing",
            "Neem – acne and skin infections",
            "Bhringraj – hair growth",
            "Turmeric – anti-inflammatory",
          ]}
          link="/dashboard/plants"
        />
      </section>

      {/* EDUCATIONAL VALUE */}
      <section className="bg-green-50 p-8 rounded-3xl border">
        <h2 className="text-2xl font-semibold mb-4">
          Why Guided Tours?
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Helps beginners understand medicinal plants step-by-step</li>
          <li>Groups plants based on real health problems</li>
          <li>Supports AYUSH education and awareness</li>
          <li>Encourages structured learning instead of random browsing</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Link
          to="/dashboard/plants"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition"
        >
          Explore Plants Now →
        </Link>
      </section>
    </div>
  );
}

/* 🔹 TOUR CARD */
function TourCard({ title, description, points, link }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>

      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

    
    </div>
  );
}
