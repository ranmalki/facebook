import React, { useState } from 'react';
import './Register.css';

function Register() {

    const [name, setName] = useState('');

    async function register(e) {
        e.preventDefault();
        await fetch('http://netcraft-hackathon.herokuapp.com/register', {
            method: 'POST',
            body: JSON.stringify({
                name
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    return (
        <div className="register">
            <div>
                <form onSubmit={register}>
                    <h2>Please Register</h2>
                    <input placeholder="name..." value={name} onChange={e => setName(e.target.value)} />
                    <input placeholder="email..." />
                    <input placeholder="password..." />
                    <button>submit</button>
                </form>
            </div>
        </div>
    );
}

export default Register;