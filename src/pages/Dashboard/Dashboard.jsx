import { useRef, useState, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";
import "./Dashboard.css";
import Navbar from "./NavBar/NavBar";

export default function Dashboard() {
  const [listening, setListening] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState("");
  const [displayTranscripts, setDisplayTranscripts] = useState([]);

  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      let interim = "";
      let finalChunk = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
          finalChunk += transcript + " ";
        } else {
          interim += transcript;
        }
      }
      if (finalChunk.trim()) {
        setDisplayTranscripts(prev => [finalChunk.trim(), ...prev]);
        setLiveTranscript(""); 
      }

      setLiveTranscript(interim.trim());
    };

    recognitionRef.current = recognition;
  }, []);

  const startListening = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      recognitionRef.current.start();
      setListening(true);
    } catch (err) {
      alert("Microphone access denied");
    }
  };

  const stopListening = () => {
    recognitionRef.current.stop();

    setListening(false);
    setLiveTranscript("");
  };

  return (
    <div>
      <Navbar />

      <div className="dashboard">
        <div className="dashboard-container">

          <div className="top-status">
            {listening ? "🎙 Microphone is active" : "Microphone is inactive"}
          </div>

          <div className="listening-box">
            {listening
              ? liveTranscript || "Listening..."
              : "Click mic to start"}
          </div>

          <div className="mic-wrapper-container">
            <div
              className={`mic-wrapper ${listening ? "active" : ""}`}
              onClick={listening ? stopListening : startListening}
            >
              <FaMicrophone />
            </div>
          </div>

          <div className="previous-transcripts">
            <h4>Transcripts</h4>

            {displayTranscripts.length === 0 && (
              <p>No confirmed data yet</p>
            )}

            <ul>
              {displayTranscripts.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}