import Tick from "./assets/tick.png";
import Mobile from "./assets/mobile.png";
import Net from "./assets/net.png";
import Wave from "./assets/wave.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <div id="banner">
          <h1 className="title">Check your financial health</h1>
          <div className="txt-cont">
            Use WeathoMeter to get a free report card for your finances- within
            minutes!
          </div>

          <div className="button-container">Get Started</div>
        </div>

        <div className="features">
          <div className="features-left">
            <div className="features-text">
              <img className="icon" src={Tick} alt="ckeck" />
              <div className="txt-check-cont">Expected Retirement Age</div>
            </div>
            <div className="features-text">
              <img className="icon" src={Tick} alt="check" />
              <div className="txt-check-cont">Identify Mistakes</div>
            </div>
          </div>

          <img className="phone-image" src={Mobile} alt="mobile" />

          <div className="features-right">
            <div className="features-text">
              <img className="icon" src={Tick} alt="aaa" />
              <div className="txt-check-cont">Personalised Road Map</div>
            </div>
            <div className="features-text">
              <img className="icon" src={Tick} alt="aaa" />
              <div className="txt-check-cont">Tips To Improve</div>
            </div>
          </div>
        </div>
        <div className="last-cont">
          <img className="wave-image" src={Wave} alt="aaa" />
          <div className="how-it-works">
            <h1>How it works?</h1>
            <img className="toolbox-image" src={Net} alt="Toolbox" />
            <div className="steps-container">
              <p className="step">
                Answer few
                <br />
                questions
              </p>
              <p className="step">
                Register using
                <br />
                phone and OTP
              </p>
              <p className="step">
                Get report and
                <br />
                personal roadmap
              </p>
            </div>
            <div className="button-container1">Get Started</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
