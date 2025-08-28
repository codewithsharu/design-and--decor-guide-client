import React, { useEffect, useState } from "react";
import PortfolioHeading from "../components/Common/PortfolioHeading";
import "./Hiw1.css"; // Import the new CSS file

const timelineItems = [
  { label: "Talk To Us & Get an Estimate", icon: "/workprocess/assets/img/icon/user-black.svg" },
  { label: "Design & Finetuning", icon: "/workprocess/assets/img/icon/tp-work-icon02.svg" },
  { label: "Detailed Drawing & Production", icon: "/workprocess/assets/img/icon/edit.svg" },
  { label: "Delivery & Execution", icon: "/workprocess/assets/img/icon/check-icon.svg" },
];

export default function Hiw1() {
  const [animatedIndex, setAnimatedIndex] = useState(-1);
  const [resetting, setResetting] = useState(false); // New state for resetting

  useEffect(() => {
    let intervalRef; // To hold the interval ID

    const runAnimationCycle = () => {
      setResetting(true); // Start by enabling instant reset
      setAnimatedIndex(-1); // Reset all lines instantly

      // After a very brief moment, disable resetting and start animation
      setTimeout(() => {
        setResetting(false);
        timelineItems.forEach((_, index) => {
          setTimeout(() => {
            setAnimatedIndex(index);
          }, index * 150); // Further adjusted animation speed
        });
      }, 50); // Small delay to ensure CSS transition: none is applied
    };

    // Initial animation run
    runAnimationCycle();

    // Set up interval for continuous replay
    // The delay should be longer than the total time for one animation cycle
    const totalLineAnimationDuration = (timelineItems.length - 1) * 150 + 700; // Adjusted for new animation speed
    const replayInterval = totalLineAnimationDuration + 1000; // Wait 1 second after animation finishes before restarting

    intervalRef = setInterval(runAnimationCycle, replayInterval);

    // Cleanup function
    return () => {
      clearInterval(intervalRef);
    };
  }, [timelineItems.length]); // Dependency array: only re-run if timelineItems length changes

  return (
    <div>
      <PortfolioHeading
        headingText="How It Works ?"
        description="Our list of services and skills spans the spectrum of interior design, bringing expertise in conceptualization, spatial planning, and execution, delivering tailored solutions and skilled craftsmanship."
        buttonText="VIEW OUR PORTFOLIO"
      />
      <div className="container">
       
        <ul className="timeline">
          {timelineItems.map((item, idx) => (
            <li
              key={item.label}
              className={`${idx <= animatedIndex ? "line-animated" : ""} ${resetting ? "no-transition" : ""}`}
              style={{}}
            >
              <img src={item.icon} alt={item.label} className="timeline-icon" />
              <div className="timeline-label">{item.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
