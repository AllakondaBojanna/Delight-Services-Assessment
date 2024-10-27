import React, { useState } from 'react';

// Define UserRole as a union of string literals
type UserRole = 'Admin' | 'User' | 'Guest';

// Define User interface
interface User {
    username: string;
    password: string;
}

// Use Record to create the users object
const users: Record<UserRole, User> = {
    Admin: { username: 'John Doe', password: 'johndoe@123' },
    User: { username: 'Nick', password: 'Nick@123' },
    Guest: { username: 'Guest', password: 'guest@123' }
};

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        // Cast keys to UserRole[]
        const foundRole = (Object.keys(users) as UserRole[]).find((role) => {
            // Explicitly assert role to UserRole
            return users[role].username === username && users[role].password === password;
        });

        if (foundRole) {
            alert(`Welcome, ${username}! Your role is ${foundRole}.`);
            // Additional logic based on role
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Login;
