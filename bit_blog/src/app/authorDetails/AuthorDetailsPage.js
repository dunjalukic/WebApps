import React, { Component } from 'react';
import AuthorName from './AuthorName';
import AuthorAddress from './AuthorAddress';
import AuthorCompany from './AuthorCompany';
import authorsService from '../../services/authorsService'
import { Link } from 'react-router-dom';

class AuthorDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: {}
        }
    }

    componentDidMount() {
        authorsService.getAuthorDetails(this.props.match.params.id)
            .then(author => {
                this.setState({
                    author: author
                })
            })
    }

    render() {
        return (
            <div className="container" className="centeredText">
                <AuthorName
                    name={this.state.author.name}
                    userName={this.state.author.username}
                    email={this.state.author.email}
                    phone={this.state.author.phone}
                />
                <AuthorAddress />
                <AuthorCompany />
            </div>

        );
    }
}

export default AuthorDetailsPage;