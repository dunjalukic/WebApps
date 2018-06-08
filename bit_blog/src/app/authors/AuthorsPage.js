import React, { Component } from 'react';
import AuthorList from './AuthorList'
import authorsService from '../../services/authorsService';

class AuthorsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [],
        }
    }

    loadAuthors() {
        authorsService.getAuthors()
            .then((authors) => {
                this.setState({
                    authors: authors
                })
            })
    }

    componentDidMount() {
        this.loadAuthors();
    }

    render() {
        return (
            <div className="container" className="centeredText">
                <h3>AUTHORS</h3>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
}

export default AuthorsPage;