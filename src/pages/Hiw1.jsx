import React, { useEffect, useState } from "react";

const timelineItems = [
  { label: "Talk To Us & Get an Estimate", icon: "/workprocess/assets/img/icon/user-black.svg" },
  { label: "Design & Finetuning", icon: "/workprocess/assets/img/icon/tp-work-icon02.svg" },
  { label: "Detailed Drawing & Production", icon: "/workprocess/assets/img/icon/edit.svg" },
  { label: "Execution & Handover", icon: "/workprocess/assets/img/icon/check-icon.svg" },
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
      <style>{`
        body {
          background: #fff;
        }

        h1 {
          text-align: center;
          text-transform: uppercase;
          margin-bottom: 40px;
        }

        .container {
          width: 1200px;
          margin: 24px auto;
        }

        .timeline {
          counter-reset: test 0; /* Start counter from 1 */
          position: relative;
          padding: 0;
          margin: 40px 0;
        }

        .timeline li {
          list-style: none;
          float: left;
          width: 25%; /* Adjusted for 4 steps */
          position: relative;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 150px; /* Give some space for labels above/below */
          padding: 0 5px;
          color: black; /* Revert text color to black */
        }

        .timeline li .timeline-icon {
          width: 50px;
          height: 50px;
          border: 3px solid #3366CC; /* Blue border */
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          background: #fff; /* Revert to white background */
          /* color: #CC3333; */ /* Not applicable for img */
          /* font-size: 1.5rem; */ /* Not applicable for img */
          position: relative;
          z-index: 1;
          margin-bottom: 10px; /* Space between icon and label */
          object-fit: contain;
          padding: 5px; /* Added padding to ensure the icon is visible within the circle */
        }

        .timeline li .timeline-label {
          position: absolute;
          bottom: -5px; /* Default position below the circle, further adjusted for spacing */
          width: 100%;
          line-height: 1.2;
        }

        .timeline li:nth-child(even) .timeline-label {
          top: -5px; /* Move even labels above the circle, further adjusted for spacing */
          bottom: auto;
        }

        ul.timeline:nth-child(1) {
          color: #000;
        }

        .timeline li:first-child .timeline-label {
          color: #CC3333; /* Make first label red */
        }

        .timeline li:after {
          content: "";
          position: absolute;
          width: 0; /* Initial width for animation */
          height: 2px; /* Make line lightly thicker */
          background-color: #CC3333;
          top: calc(50% - 1px);
          left: -50%;
          z-index: 0;
          transition: width 0.7s ease-in-out; /* Animation for width */
        }
        .timeline li.line-animated:after {
          width: 100%; /* Final width after animation */
        }

        /* New rule for slower animation of the second step's connecting line */
        .timeline li:nth-child(2).line-animated:after {
          transition: width 0.5s ease-in-out; /* Increased speed */
        }

        /* New rule for increased speed of the line between step 2 and step 3 */
        .timeline li:nth-child(3).line-animated:after {
          transition: width 0.5s ease-in-out; /* Increased speed for 2nd to 3rd line */
        }

        .timeline li.no-transition:after {
          transition: none; /* Disable transition for instant reset */
        }

        .timeline li:first-child:after {
          content: none;
        }

        /* Clear floats */
        .timeline:after {
          content: "";
          display: table;
          clear: both;
        }

        @media (max-width: 700px) {
          .container {
            width: 100%;
            margin: 0 auto;
            max-width: 98vw;
            padding: 0;
          }

          .timeline {
            margin: 24px 0;
          }

          .timeline li {
            width: 25%;
            font-size: 0.8rem;
          }

          .timeline li .timeline-icon {
            width: 32px;
            height: 32px;
            /* line-height: 32px; */
            /* font-size: 1rem; */
            border-width: 2px;
            margin-bottom: 6px;
            padding: 3px;
          }

          .timeline li:after {
            left: -50%;
            top: calc(50% - 1px);
            width: 100%;
            height: 1px;
          }
        }
      `}</style>
      
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
