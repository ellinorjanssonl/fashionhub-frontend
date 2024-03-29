import  { useEffect, useState } from 'react';
import { useAuth } from '../Components/AuthContext';
import './Css/RegisterLogin.css';
import { useNavigate } from 'react-router-dom';

/* Här är min inloggningssida där användaren kan logga in.
Jag använder useState för att hålla koll på användarnamn och lösenord.
Jag använder också useNavigate för att navigera användaren till hemsidan efter att de har loggat in. */

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Hämta login-funktionen från context

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Försök att hämta användaren från LocalStorage
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = storedUsers.find(u => u.username === username && u.password === password);
  
    if (user) {
      // Om användaren hittades, "logga in" användaren (du kan här till exempel uppdatera kontext eller state för att spegla detta)
      login(username); // Antag att login-funktionen hanterar vad som händer vid inloggning
      navigate('/'); // Navigera till startsidan eller användarens dashboard
    } else {
      // Om ingen användare hittades eller lösenordet inte stämde, visa ett felmeddelande
      alert('Felaktigt användarnamn eller lösenord');
    }
  }

  return (
    <div className="login-container">
      <h2 className="login-title">Login here</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login-username">Username:</label>
          <input
            id="login-username"
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Password:</label>
          <input
            id="login-password"
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
