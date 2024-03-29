import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Css/RegisterLogin.css';

/* här är min register sida där användaren kan registrera sig 
  Jag använder useState för att hålla koll på användarnamn och lösenord.
  Jag använder också useNavigate för att navigera användaren till inloggningssidan efter att de har registrerat sig. */

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Skapa en instans av useNavigate

  // Funktionen handleSubmit som skickar användarnamn och lösenord till servern
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Hämta befintliga användare, om några
    const users = JSON.parse(localStorage.getItem('users') || '[]');
  
    // Lägg till den nya användaren
    users.push({ username, password });
  
    // Spara den uppdaterade listan av användare i localStorage
    localStorage.setItem('users', JSON.stringify(users));
  
    // Navigera användaren
    navigate('/login');
  };
    return (
      <div className="register-container">
        <h2 className="register-title">Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="register-btn">Register</button>
        </form>
      </div>
    );
  }

export default Register;
