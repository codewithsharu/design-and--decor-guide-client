import React, { useState, useEffect } from "react";

// Define global color palette
const COLORS = ["#ffda79", "#ffabe7", "#d2bcf3", "#edf3d8", "#38bdf8"];

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});
  const [headerBgColor, setHeaderBgColor] = useState("#ffda79");

  useEffect(() => {
    // Pick a random color on component mount
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    setHeaderBgColor(randomColor);
  }, []);

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqData = [
    {
      question: "What services does Design & Decor Guide offer?",
      answer: "We offer comprehensive interior design services including residential design, space planning, furniture selection, color consultation, lighting design, and complete home makeovers."
    },
    {
      question: "How long does a typical interior design project take?",
      answer: "Project timelines vary based on scope and complexity. A single room makeover typically takes 2-4 weeks, while a complete home renovation can take 8-12 weeks."
    },
    {
      question: "Do you provide a warranty on your work?",
      answer: "Yes! We offer a comprehensive 10-year warranty on all our interior design work and installations."
    },
    {
      question: "What is your design consultation process?",
      answer: "Our process begins with an initial consultation where we discuss your vision, budget, and timeline."
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

        .poppins-regular {
          font-family: "Poppins", sans-serif;
        }

        .faq-container {
          background: #fff;
          min-height: 80vh;
          padding: 1rem 1rem;
        }

        .faq-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .faq-title {
          font-family: "Playfair Display", serif;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .faq-header-baseline {
          display: inline-block;
          margin-bottom: 1rem;
          padding: 12px 24px;
          border-radius: 9999px;
          font-size: 18px;
          font-weight: 500;
          text-transform: uppercase;
          font-family: "Poppins", sans-serif;
          letter-spacing: 0.04em;
          color: #323232;
          transition: background-color 0.5s ease;
        }

        .faq-item {
          background: linear-gradient(135deg, #121B1B, #141f1f);
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          overflow: hidden;
          border: 1px solid #374151;
          transition: all 0.3s ease;
        }

        .faq-question {
          width: 100%;
          background: none;
          border: none;
          padding: 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          color: #d1d5db;
          font-size: 1.125rem;
          font-weight: 600;
          text-align: left;
        }
        .faq-question:hover{
            color:#0ea5e9;
        }
        .faq-icon {
          transition: transform 0.3s ease;
          flex-shrink: 0;
          margin-left: 1rem;
        }

        .faq-icon.open {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s ease-in-out;
          opacity: 0;
          transform: translateY(-1rem);
        }

        .faq-answer.open {
          max-height: 200px;
          opacity: 1;
          transform: translateY(0);
        }

        .faq-answer-content {
          padding: 0 1.25rem 1.25rem 1.25rem;
          color: #9ca3af;
          line-height: 1.6;
          font-size: 1rem;
        }
      `}</style>

      <div className="faq-container poppins-regular">
        <div className="faq-content">

          {/* Heading with dynamic color */}
          <div className="l-hero__headings">
          <div className="l-hero__headings-baseline">
            FAQ'S
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
            padding: 80px 32px 0 32px;
          }

          .l-hero__headings-baseline {
            width: max-content;
            margin: 0 auto 40px;
            padding: 12px 24px;
            border-radius: 9999999px;
            font-size: 18px;
            font-weight: 500;
            text-transform: uppercase;
            background-color: var(--color-1);
            font-family: var(--font-principal);
            letter-spacing: 0.04em;
          }

          @media (max-width: 600px) {
            .l-hero__headings-title {
              font-size: 36px;
            }
            .l-hero__headings {
              padding: 48px 12px 0 12px;
            }
            .l-hero__headings-baseline {
              font-size: 16px;
              padding: 10px 16px;
            }
          }
        `}</style>

          {/* FAQ Items */}
          <div className="faq-items">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleItem(index)}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`faq-icon ${openItems[index] ? "open" : ""}`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className={`faq-answer ${openItems[index] ? "open" : ""}`}>
                  <div className="faq-answer-content">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default FAQ;
