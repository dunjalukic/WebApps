import React, { Component } from 'react';
import AuthorName from './AuthorName';
import AuthorAddress from './AuthorAddress';
import AuthorCompany from './AuthorCompany';

class AuthorDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    loadPosts() {
        postsService.getPosts()
            .then((posts) => {
                this.setState({
                    posts: posts
                })
            })
    }

    componentDidMount() {
        this.loadPosts();
    }

    render() {
        return (
            <div className="container" className="centeredText">
                <AuthorName />
                <AuthorAddress />
                <AuthorCompany />
            </div>

        );
    }
}

export default AuthorDetailsPage;