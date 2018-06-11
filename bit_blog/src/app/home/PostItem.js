import React from 'react';
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
    return (
        <div className="post">
            <h3><Link to={`/posts/${post.id}`}>{post.title}</Link></h3>
            <p>{post.body}</p>
        </div>
    )
}

export default PostItem;



