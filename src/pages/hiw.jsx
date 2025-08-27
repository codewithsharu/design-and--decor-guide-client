import React from "react";

export default function Hiw() {
  return (
    <div
      style={{
        background: "#151317",
        color: "#FFFFFF",
        minHeight: "100vh",
        width: "100vw",
        fontFamily: "'Poppins', 'Playfair Display', Tahoma, sans-serif",
        padding: "40px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="roadmap">
        <div className="point">
          <div className="point-index">1</div>
          <div className="point-label">Label</div>
          <div className="point-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </div>
        </div>
        <div className="point">
          <div className="point-index">2</div>
          <div className="point-label">Label</div>
          <div className="point-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </div>
        </div>
        <div className="point">
          <div className="point-index">3</div>
          <div className="point-label">Label</div>
          <div className="point-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </div>
        </div>
        <div className="point">
          <div className="point-index">4</div>
          <div className="point-label">Label</div>
          <div className="point-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </div>
        </div>
        <div className="point">
          <div className="point-index">5</div>
          <div className="point-label">Label</div>
          <div className="point-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </div>
        </div>
        <div className="point">
          <div className="point-index">6</div>
          <div className="point-label">Label</div>
          <div className="point-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </div>
        </div>
      </div>
      <style>{`
        body {
          background: #151317;
          color: #FFFFFF;
        }
        .roadmap {
          padding: 30px 50px;
        }
        .roadmap .point {
          display: flex;
          flex-direction: column;
          padding: 10px 50px;
          position: relative;
        }
        .roadmap .point:first-child .point-index {
          top: auto;
          bottom: 0;
          transform: translate(-50%, 2px) !important;
        }
        .roadmap .point:last-child .point-index {
          top: 0;
          transform: translate(50%, -2px) !important;
        }
        .roadmap .point:not(:last-child) {
          border-bottom: 2px solid gold;
        }
        .roadmap .point:nth-child(odd) {
          align-items: flex-start;
        }
        .roadmap .point:nth-child(odd):not(:first-child) {
          border-left: 2px solid gold;
        }
        .roadmap .point:nth-child(odd) .point-index {
          left: 0;
          transform: translate(-50%, -50%);
        }
        .roadmap .point:nth-child(even) {
          align-items: flex-end;
        }
        .roadmap .point:nth-child(even):not(:last-child) {
          border-right: 2px solid gold;
        }
        .roadmap .point:nth-child(even) .point-index {
          right: 0;
          transform: translate(50%, -50%);
        }
        .roadmap .point .point-index {
          position: absolute;
          top: 50%;
          width: 40px;
          height: 40px;
          background: #151317;
          border: 2px solid gold;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 23px;
          font-weight: bold;
        }
        .roadmap .point .point-label {
          flex: 1 0 100%;
          width: 100%;
          font-size: 14px;
          margin-bottom: 5px;
        }
        @media (min-width: 641px) {
          .roadmap .point .point-label {
            flex: 1 0 50%;
            width: 50%;
          }
        }
        .roadmap .point .point-text {
          flex: 1 0 100%;
          width: 100%;
          font-size: 12px;
          color: #CCCCCC;
        }
        @media (min-width: 641px) {
          .roadmap .point .point-text {
            flex: 1 0 50%;
            width: 50%;
          }
        }
      `}</style>
    </div>
  );
}
