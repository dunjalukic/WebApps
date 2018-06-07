import React, { Component } from 'react';
// import AuthorList from './AuthorList'


class AuthorsPage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="container" className="centeredText">
                <h3>AUTHORS</h3>
                {/* <AuthorList/> */}
            </div>
        );
    }
}

export default AuthorsPage;