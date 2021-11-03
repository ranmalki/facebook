import React, { useState } from 'react';
import './CreatePost.css';

function CreatePost() {

    const [message, setMessage] = useState('');

    async function submit(e) {
        e.preventDefault();
        await fetch('http://netcraft-hackathon.herokuapp.com/post', {
            method: 'POST',
            body: JSON.stringify({
                message,
                name: 'Tamir'
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }

    return (
        <div className="create-post-wrapper">
            <form className="create-post" onSubmit={submit}>
                <h1 className="create-post-header">Create post</h1>
                <input value={message} onChange={e => setMessage(e.target.value)} className="post-input" placeholder="What's on your mind?" />
                <div className="create-post-btn-wrapper">
                    <button className="create-post-btn">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default CreatePost;