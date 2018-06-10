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

    componentDidMount() {
        authorsService.getAuthors()
            .then(authors => {
                this.setState({
                    authors: authors
                })
            })
    }

    render() {
        return (
            <div className="container" className="centeredText">
                <h3>AUTHORS ({this.state.authors.length})</h3>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
}

export default AuthorsPage;