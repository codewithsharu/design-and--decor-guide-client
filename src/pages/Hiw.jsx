
import React from "react";
import { FaUserTie, FaPencilRuler, FaDraftingCompass, FaTruck, FaHandshake } from "react-icons/fa";

export default function Hiw() {
  const steps = [
    { icon: <FaUserTie />, title: "Talk To Us", subtitle: "Get an Estimate" },
    { icon: <FaPencilRuler />, title: "Design", subtitle: "Finetuning & Ideas" },
    { icon: <FaDraftingCompass />, title: "Drawings", subtitle: "Detailed Production" },
    { icon: <FaTruck />, title: "Execution", subtitle: "Delivery & Setup" },
    { icon: <FaHandshake />, title: "Hand Over", subtitle: "Your Dream Space" },
  ];

  return (
    <section className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <header className="l-hero">
          <div className="l-hero__headings" style={{ paddingTop: 24, paddingBottom: 24 }}>
            <div className="l-hero__headings-baseline" style={{ color: "black" }}>
              How It Works
            </div>
          </div>
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

            :root {
              --font-principal: "Poppins", sans-serif;
              --font-custom: "Playfair Display", serif;
              --color-light: white;
              --color-dark: #323232;
              --color-1: #ffda79;
              --color-2: #ffabe7;
              --color-3: #d2bcf3;
              --color-4: #edf3d8;
              --container-width: min(90%, 769px);
            }

            .l-hero__headings {
              padding: 24px 32px 24px 32px;
            }

            .l-hero__headings-baseline {
              width: max-content;
              margin: 0 auto 24px;
              padding: 12px 24px;
              border-radius: 9999999px;
              font-size: 18px;
              font-weight: 500;
              text-transform: uppercase;
              background-color: var(--color-1);
            }

            .l-hero__headings-title {
              width: var(--container-width);
              margin: 0 auto 24px;
              font-family: var(--font-custom);
              font-size: 72px;
              text-align: center;
            }

            @media (max-width: 600px) {
              .l-hero__headings-title {
                font-size: 36px;
              }
            }
          `}</style>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="text-4xl text-orange-400 bg-gray-900 p-6 rounded-full mb-4 transition-transform group-hover:scale-110">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-gray-400">{step.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
