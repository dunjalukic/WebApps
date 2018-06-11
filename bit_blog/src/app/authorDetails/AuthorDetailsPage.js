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
            author: {
                address: {},
                company: {}
            }
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
            <div className="container centeredText">
                <span><Link to='/authors'>List of all Authors</Link></span>
                <AuthorName
                    name={this.state.author.name}
                    userName={this.state.author.username}
                    email={this.state.author.email}
                    phone={this.state.author.phone}
                />
                <AuthorAddress
                    street={this.state.author.address.street}
                    city={this.state.author.address.city}
                    zip={this.state.author.address.zipcode}
                />
                <AuthorCompany
                    companyName={this.state.author.company.name}
                    slogan={this.state.author.company.catchPhrase}
                />
            </div>
        );
    }
}

export default AuthorDetailsPage;