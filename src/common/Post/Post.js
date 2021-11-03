import React from 'react';
import Like from './Like/Like';
import './Post.css';

function Post({data}) {

    return (
        <div className="feed">
            <div className="post">
                <div className="post-name">
                   <div className='name-1'>Name:</div><div>{data.name}</div>
                    </div>
                <div className="post-time">
                    <div className="time-1">Posted at</div><div className="time-2">{data.time}</div>
                    </div>
                <div className="post-message">
                    {data.message}
                    </div>
                <div><Like /></div>
                

            </div>
        </div>
)}

export default Post;