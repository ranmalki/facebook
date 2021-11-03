import { useState } from "react";
import React from 'react';

function Like() {

    const [likes, setLikes] = useState(0);

    function Increase() {
		setLikes(likes + 1);
	}

    return (
        <div className="wrapper">
            <button className="button" onClick={Increase}>Like</button>
            <div>{likes} Likes</div>
        </div>
    );
}

export default Like;