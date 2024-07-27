import "./Login.css";

import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy login validation
    if (username === 'admin' && password === '12345678') {
      navigate('/Main'); // Navigate to the main screen upon successful login
    } else {
      alert('Invalid username or password');
    }
  };
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Login to your account</h2>

        <div className="input_label">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input_label">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="remember_me">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <div className="forgot_password">
            <Link to='/ForgotPassword'>Forgot password</Link>
          </div>
        </div>

        <button type="submit">Login</button>

        <div className="register_link">
          <p>
            Don't have an account? <Link to="/SignUp">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
