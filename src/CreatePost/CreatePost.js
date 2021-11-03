import React from 'react';
import './CreatePost.css';

function CreatePost() {
    return (
        <div className="create-post-wrapper">
            <div className="create-post">
                <h1 className="create-post-header">Create post</h1>
                <input className="post-input" placeholder="What's on your mind?" />
                <div className="create-post-btn-wrapper">
                    <button className="create-post-btn">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;