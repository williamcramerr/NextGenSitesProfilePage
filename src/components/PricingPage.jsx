import React, { useEffect } from "react";

export default function PricingPage() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ once: true, duration: 800 });
    }
  }, []);

  const certifications = [
    "Google IT Support Professional",
    "IBM Cybersecurity Specialist",
    "ISC2 Cybersecurity Specialist",
    "Microsoft Cybersecurity Analyst",
    "Google Cybersecurity Professional",
    "Meta Front End Web Development",
    "Google IT Automation with Python",
  ];

  const corePlans = [
    { title: "Starter Site", desc: "3-page site", price: "$799" },
    { title: "Business Pro", desc: "5–7 pages", price: "$1,499" },
    { title: "E-Commerce", desc: "Online store setup", price: "$2,799+" },
  ];

  const supportPlans = [
    {
      title: "Core Hosting",
      price: "$59/mo",
      details: "Free SSL, performance tuning, hands-off maintenance",
    },
    {
      title: "Growth Support",
      price: "$119/mo",
      details: "Core Hosting + monthly updates, speed & security",
    },
    {
      title: "Full-Service",
      price: "$229/mo",
      details: "Unlimited edits, SEO reports, priority support",
    },
  ];

  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zM12 17a5 5 0 110-10 5 5 0 010 10z" />
        </svg>
      ),
      title: "24/7 Monitoring",
      desc: "Real-time alerts & proactive threat mitigation.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M3 13h2v-2H3v2zm4 6h2v-4H7v4zm4-12h2v10h-2V7zm4 4h2v6h-2v-6zm4-8h2v14h-2V3z" />
        </svg>
      ),
      title: "Custom Analytics",
      desc: "Interactive dashboards for performance & security metrics.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a10 10 0 00-7.07 17.07A10 10 0 1012 2zm1 14.59L18.59 12 13 6.41V11H10v2h3v5.59z" />
        </svg>
      ),
      title: "Priority Support",
      desc: "Guaranteed 24h SLA & dedicated assistance.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13 2v9h2L8 22v-9H6L13 2z" />
        </svg>
      ),
      title: "AI-Driven Automation",
      desc: "Predictive maintenance & automated compliance.",
    },
  ];

  return (
    <div className="bg-black min-h-screen py-12 text-white">
      <div className="container mx-auto px-6">
        {/* Profile Summary */}
        <section
          className="max-w-xl mx-auto mb-16 bg-gray-900 border-2 border-green-500 rounded-xl p-6 text-center"
          data-aos="fade-up"
        >
          <img
            src="/Grad Pic.jpg"
            alt="Will Cramer"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-green-500"
          />
          <h2 className="text-2xl font-bold text-green-400 mb-2">
            Will Cramer / Vice President
          </h2>
          <p className="text-green-300 mb-4">
            B.S. Cyber Operations (Law & Policy) @ University of Arizona,
            graduated <span className="italic">cum laude</span>
          </p>
          <p className="text-green-300">
            Cybersecurity & Compliance Consultant specializing in compliance
            automation, threat intelligence, and AI-driven security.
          </p>
        </section>

        {/* Pricing Plans Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl font-extrabold text-green-400">
            Pricing Plans
          </h1>
          <p className="mt-2 text-green-200">
            Choose the package that’s right for your business.
          </p>
        </div>

        {/* Core Pricing */}
        <section className="mb-16" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-green-400 mb-6">
            Core Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corePlans.map((plan) => (
              <div
                key={plan.title}
                className="bg-gray-800 border border-green-500 rounded-2xl p-6 text-center"
              >
                <h3 className="text-xl font-semibold text-green-300 mb-2">
                  {plan.title}
                </h3>
                <p className="text-green-200 mb-4">{plan.desc}</p>
                <p className="text-3xl font-extrabold text-green-400 mb-0">
                  {plan.price}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Ongoing Support Plans (with extra bottom margin) */}
        <section className="mb-24" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-green-400 mb-6">
            Ongoing Support Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportPlans.map((plan) => (
              <div
                key={plan.title}
                className="bg-gray-800 border border-green-500 rounded-2xl p-6 text-center"
              >
                <h3 className="text-lg font-medium text-green-300 mb-2">
                  {plan.title}
                </h3>
                <p className="text-2xl font-bold text-green-400 mb-2">
                  {plan.price}
                </p>
                <p className="text-green-200 text-sm">{plan.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="mb-16" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-green-400 mb-6">
            Feature Highlights
          </h2>
          <div className="flex flex-col md:flex-row md:justify-between gap-6">
            {features.map((item) => (
              <div
                key={item.title}
                className="flex items-start space-x-4 md:w-1/4"
              >
                <div className="p-3 bg-green-500 rounded-full text-black">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-300">
                    {item.title}
                  </h3>
                  <p className="text-green-200 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Abilities */}
        <section className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-green-400 mb-6">
            Certifications & Abilities
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="inline-block bg-green-500 text-black px-3 py-1 rounded-full text-sm font-medium"
              >
                {cert}
              </span>
            ))}
          </div>
        </section>

        {/* Social Links */}
        <section
          className="flex justify-center space-x-6 mt-8"
          data-aos="fade-up"
        >
          <a
            href="https://www.linkedin.com/in/williamcramer1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-white transition transform hover:scale-110"
          >
            {/* LinkedIn SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1s2.48 1.12 2.48 2.5zM0 24h5V8h-5v16zM12 8h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7C24 7.5 24 15 24 15v9h-5v-8.2c0-1.9-.1-4.5-2.7-4.5-2.7 0-3.1 2.1-3.1 4.3V24h-5V8z" />
            </svg>
          </a>
          <a
            href="https://github.com/williamcramerr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-white transition transform hover:scale-110"
          >
            {/* GitHub SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.38-3.87-1.38-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18.91-.25 1.88-.37 2.85-.37.97 0 1.94.12 2.85.37 2.19-1.5 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.8 1.18 1.82 1.18 3.08 0 4.43-2.68 5.4-5.24 5.68.41.35.78 1.04.78 2.1v3.11c0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.35-5.15-11.5-12-11.5z" />
            </svg>
          </a>
          <a
            href="mailto:williamcramerr@outlook.com"
            className="text-green-400 hover:text-white transition transform hover:scale-110"
          >
            {/* Email SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M0 4v16h24V4H0zm22 2l-10 7L2 6h20zM2 18V8l10 7 10-7v10H2z" />
            </svg>
          </a>
        </section>
      </div>
    </div>
  );
}
