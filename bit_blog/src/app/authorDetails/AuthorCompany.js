import React from 'react';

const AuthorCompany = (props) => {
    return (
        <div>
            <div id="authorCompany">
                <h2>Company</h2>
                <p>name: {props.companyName}</p>
                <p>slogan: {props.slogan}</p>
            </div>
        </div>
    )
}

export default AuthorCompany;