import React from 'react';
import { Link } from "react-router-dom";

const AuthorList = (props) => {
    return (
        <div id="authorList">
            {props.authors.map(author =>
                <div className="author">
                    <Link to={`/authors/${author.id}`}>{author.name}</Link>
                </div>)}
        </div>
    )
}


export default AuthorList;