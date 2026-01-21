import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 via-green-700 to-emerald-600 px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-10 border border-green-200">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-green-800 text-center mb-6">
          About Virtual Herbal Garden 🌿
        </h1>

        <p className="text-green-700 text-lg text-center mb-10">
          A digital platform that connects traditional herbal wisdom with modern
          interactive learning.
        </p>

        {/* Our Purpose */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Our Purpose 🎯
          </h2>
          <p className="text-green-700 leading-relaxed">
            The purpose of the Virtual Herbal Garden is to preserve, promote,
            and digitally document traditional herbal knowledge that has been
            practiced in India for centuries. By transforming medicinal plant
            information into an interactive and user-friendly digital format,
            the platform ensures that valuable herbal knowledge remains
            accessible to students, researchers, healthcare practitioners, and
            the general public.
          </p>
          <p className="text-green-700 leading-relaxed mt-3">
            Our goal is to bridge the gap between ancient wisdom and modern
            education by presenting authentic, well-structured, and
            easy-to-understand content aligned with AYUSH systems.
          </p>
        </section>

        {/* What We Offer */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            What We Offer 🌱
          </h2>
          <ul className="list-disc list-inside text-green-700 space-y-2">
            <li>
              <span className="font-medium">
                Interactive Plant Exploration:
              </span>{" "}
              Users can explore medicinal plants through visually rich and
              interactive interfaces that make learning engaging and intuitive.
            </li>
            <li>
              <span className="font-medium">Standardized Plant Profiles:</span>{" "}
              Each plant includes detailed information such as botanical name,
              medicinal uses, therapeutic properties, traditional applications,
              and safety precautions based on AYUSH systems.
            </li>
            <li>
              <span className="font-medium">Multimedia Learning Content:</span>{" "}
              Images, explanatory text, and guided descriptions enhance
              understanding and retention of herbal knowledge.
            </li>
            <li>
              <span className="font-medium">
                Guided Thematic & Learning Tours:
              </span>{" "}
              Predefined tours group plants by health benefits such as immunity,
              digestion, and overall wellness for structured learning.
            </li>
            <li>
              <span className="font-medium">Advanced Search & Filtering:</span>{" "}
              Users can search and filter plants based on medicinal use, plant
              category, and AYUSH discipline for quick access to relevant
              information.
            </li>
          </ul>
        </section>

        {/* Who Can Use It */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Who Can Use It 🧠
          </h2>
          <p className="text-green-700 leading-relaxed">
            The Virtual Herbal Garden is designed for a wide range of users,
            including students pursuing studies in life sciences and healthcare,
            educators seeking interactive teaching tools, researchers exploring
            medicinal plant data, healthcare practitioners working with
            traditional medicine, and individuals interested in learning about
            herbal remedies and natural wellness.
          </p>
        </section>

        {/* Why It Matters */}
        <section>
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Why It Matters 🌍
          </h2>
          <p className="text-green-700 leading-relaxed">
            Traditional herbal knowledge is at risk of being lost due to limited
            documentation and accessibility. The Virtual Herbal Garden addresses
            this challenge by digitally preserving medicinal plant information
            and making it easily accessible through modern technology.
          </p>
          <p className="text-green-700 leading-relaxed mt-3">
            By integrating ancient herbal wisdom with interactive digital tools,
            the platform promotes awareness, sustainable learning, and
            responsible use of medicinal plants while preserving cultural and
            scientific heritage.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
