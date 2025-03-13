import React, { useState } from 'react';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async () => {
        const res = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        setMessage(data.message);
    };

    const handleLogin = async () => {
        const res = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        setMessage(data.message || data.error);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Login / Signup</h2>
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <br />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <br />
            <button onClick={handleSignup}>Signup</button>
            <button onClick={handleLogin}>Login</button>
            <p>{message}</p>
        </div>
    );
}

export default App;