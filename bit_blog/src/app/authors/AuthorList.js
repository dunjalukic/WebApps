import React from 'react';

const AuthorList = (props) => {
    return (
        <div id="authorList">
            {props.authors.map((author) => <div className="author">{author.name}</div>)}
        </div>
    )
}

export default AuthorList;