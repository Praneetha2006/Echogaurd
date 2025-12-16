import { useState } from "react";
import "./Login.css";

function Login() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="auth-container">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <div className="logo">🔊 EchoGuard</div>

        <div className="welcome-text">
          <h1>Hello, welcome!</h1>
          <p>
            An AI-powered system that listens to ambient sounds and detects
            emergency situations in real time.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        {!isSignup ? (
          /* SIGN IN */
          <div className="form-box">
            <h2>Sign In</h2>
            <p>Access your safety dashboard</p>

            <div className="input-group">
              <input type="email" placeholder="Email" />
            </div>

            <div className="input-group">
              <input type="password" placeholder="Password" />
            </div>

            <button>Login</button>

            <div className="switch">
              Don’t have an account?{" "}
              <span onClick={() => setIsSignup(true)}>Sign Up</span>
            </div>
          </div>
        ) : (
          /* SIGN UP */
          <div className="form-box">
            <h2>Sign Up</h2>
            <p>Create your secure account</p>

            <div className="input-group">
              <input type="text" placeholder="Full Name" />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Email" />
            </div>

            <div className="input-group">
              <input type="password" placeholder="Password" />
            </div>

            <div className="input-group">
              <input type="password" placeholder="Confirm Password" />
            </div>

            <button>Create Account</button>

            <div className="switch">
              Already have an account?{" "}
              <span onClick={() => setIsSignup(false)}>Sign In</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
