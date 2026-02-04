import "./App.css";
import Countdown from "./components/Countdown";

function App() {
  return (
    <div className="app">
      {/* {showConfetti && <Confetti />} */}
      <div className="hero-section">
        <div className="glow-circle glow-circle-1"></div>
        <div className="glow-circle glow-circle-2"></div>
        <div className="glow-circle glow-circle-3"></div>

        <div className="content">
          <h1 className="title">
            <span className="title-main">MYRNABA?</span>
            <span className="title-sub">Patience is a virtue</span>
          </h1>

          <Countdown targetDate={new Date("2026-03-15T00:00:00")} />

          <div className="bonus-badge">
            <div className="bonus-stars">★ ★ ★</div>
            <div className="bonus-amount">MARCH 15</div>
            <div className="bonus-text">SAVE THE DATE</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
