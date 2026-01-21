import { Link } from "react-router-dom";

export default function LearningTours() {
  return (
    <div className="relative p-8 min-h-screen">
      {/* 🔹 Translucent Background */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-3xl m-4 z-0 pointer-events-none" />

      <div className="relative z-10 space-y-14 max-w-6xl mx-auto">
        {/* HEADER */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            Guided Learning Tours 🌿
          </h1>
          <p className="mt-4 text-gray-200 max-w-4xl mx-auto text-lg">
            Explore medicinal plants in a structured, theme-based way. Each tour
            groups plants based on health benefits, traditional AYUSH knowledge,
            and real-world applications.
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

          <TourCard
            title="💚 General AYUSH Knowledge Tour"
            description="Learn about AYUSH systems, doshas, and traditional medicine principles."
            points={[
              "Ayurveda, Yoga, Unani, Siddha, Homeopathy overview",
              "Balance of Doshas and body systems",
              "Traditional herbal remedies explained",
              "Integrating AYUSH knowledge into daily life",
            ]}
            link="/dashboard/plants"
          />
        </section>

        {/* EDUCATIONAL VALUE */}
        <section className="bg-white/20 backdrop-blur-xl p-8 rounded-3xl border border-green-200 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-green-800 drop-shadow-sm">
            Why Guided Tours?
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
            <li>Step-by-step understanding of medicinal plants</li>
            <li>Groups plants based on real health problems</li>
            <li>Supports AYUSH education and awareness</li>
            <li>Encourages structured learning over random browsing</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Link
            to="/dashboard/plants"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-2xl font-semibold transition shadow-md hover:shadow-lg transform hover:scale-[1.02]"
          >
            Explore Plants Now →
          </Link>
        </section>
      </div>
    </div>
  );
}

/* 🔹 TOUR CARD */
function TourCard({ title, description, points, link }) {
  return (
    <div className="bg-white/40 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform transform space-y-4">
      <h3 className="text-xl font-semibold text-green-900 drop-shadow-sm">
        {title}
      </h3>
      <p className="text-gray-800">{description}</p>

      <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      {/* <Link
        to={link}
        className="mt-3 inline-block text-green-700 font-medium hover:underline"
      >
        Learn More →
      </Link> */}
    </div>
  );
}
