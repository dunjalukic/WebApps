import React from 'react';
import PostItem from './PostItem';

const PostList = (props) => {
    return (
        <div>
            {props.posts.map((post) => <PostItem post={post} />)}
        </div>
    )
}

export default PostList;