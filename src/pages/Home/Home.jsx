import "./Home.css";
import Navbar from "./Navbar/Navbar.jsx";
export default function Home() {
  return (
    <div>
        <Navbar />  
    <div className="home">
      {/* Floating water layers */}
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>

      {/* Content */}
      <div className="content">
        <h1>AI-Powered Real-Time Emergency <br/> Detection System </h1>
        <p>AI-Powered Real-Time Emergency Detection System continuously listens to ambient sounds and intelligently detects <br />emergency situations such as screams, accidents, violence, or medical distress. Upon detection, it instantly sends alerts along with the<br /> user’s location to emergency contacts, enabling faster and automated response without manual intervention.</p>
<button className="join-btn">Join Now</button>
      </div>
    </div>
    </div>
  );
}
