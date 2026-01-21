import React from "react";

function FAQs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 via-green-700 to-emerald-600 px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-10 border border-green-200">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-green-800 text-center mb-8">
          Frequently Asked Questions 🌿
        </h1>

        {/* FAQ Item */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-green-800">
              What is the Virtual Herbal Garden?
            </h3>
            <p className="text-green-700 mt-2">
              The Virtual Herbal Garden is an interactive digital platform that
              provides information about medicinal plants used in traditional
              AYUSH systems. It helps users explore, learn, and understand
              herbal plants through structured and multimedia-rich content.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-800">
              Which medicinal systems are covered?
            </h3>
            <p className="text-green-700 mt-2">
              The platform is based on AYUSH systems, including Ayurveda, Yoga &
              Naturopathy, Unani, Siddha, and Homeopathy.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-800">
              Who can use this platform?
            </h3>
            <p className="text-green-700 mt-2">
              The Virtual Herbal Garden can be used by students, educators,
              researchers, healthcare practitioners, and anyone interested in
              learning about traditional medicinal plants.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-800">
              Does the platform provide scientific and traditional details?
            </h3>
            <p className="text-green-700 mt-2">
              Yes, each plant profile includes standardized information such as
              botanical name, medicinal uses, therapeutic properties,
              traditional applications, and safety precautions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-800">
              Can I search for plants based on health benefits?
            </h3>
            <p className="text-green-700 mt-2">
              Yes, users can search and filter plants based on health benefits,
              plant categories, and AYUSH disciplines for easy discovery.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-800">
              Is this platform intended for medical treatment?
            </h3>
            <p className="text-green-700 mt-2">
              No, the Virtual Herbal Garden is designed for educational and
              informational purposes only. Users are advised to consult
              qualified healthcare professionals before using any medicinal
              plants for treatment.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-800">
              Will new plants and features be added in the future?
            </h3>
            <p className="text-green-700 mt-2">
              Yes, the platform is designed to be scalable, and future updates
              may include more plant species, advanced search features, and
              enhanced interactive learning tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
