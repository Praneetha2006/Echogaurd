import "./History.css";
import Navbar from "../NavBar/NavBar";

const History = () => {
  const emergencyHistory = [
    {
      id: 1,
      type: "Scream",
      transcript: "Help me please someone is chasing me",
      time: "16 Dec 2025 · 2:18 PM",
    },
    {
      id: 2,
      type: "Glass Break",
      transcript: "Loud glass breaking sound followed by panic noise",
      time: "15 Dec 2025 · 11:02 PM",
    },
    {
      id: 3,
      type: "Severe Coughing",
      transcript: "I can't breathe properly please help",
      time: "15 Dec 2025 · 8:41 AM",
    },
    {
      id: 4,
      type: "Accident",
      transcript: "There has been a crash, multiple people injured",
      time: "14 Dec 2025 · 6:19 PM",
    }
  ];

  return (
    <div>
      <Navbar />

      <div className="history-page">
        <div className="history-container">

          <h2 className="history-title">🚨 Emergency History</h2>
          <p className="history-subtitle">
            Detected critical audio events only
          </p>

          <div className="history-list">
            {emergencyHistory.map(item => (
              <div className="history-card" key={item.id}>
                <div className="history-header">
                  <span className="history-type">{item.type}</span>
                  <span className="history-time">{item.time}</span>
                </div>

                <div className="history-transcript">
                  {item.transcript}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default History;
