import React, { useEffect, useState } from 'react'
import Post from '../common/Post/Post';
import './Feed.css';

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

    fetch('https://netcraft-hackathon.herokuapp.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data));

    }, [])

    return (
        <div>
             {posts.map(post => (
                <Post key={post._id} data={post} />
            ))}

        </div>
    );
}

export default Feed;