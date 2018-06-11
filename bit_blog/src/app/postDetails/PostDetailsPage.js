import React, { Component } from 'react';
import PostsFromSameAuthor from './PostsFromSameAuthor';
import postsService from '../../services/postsService'
import { Link } from 'react-router-dom';

class PostDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        postsService.getPostDetails(this.props.match.params.id)
            .then(post => {
                this.setState({
                    post: post
                })
            })
    }

    render() {
        return (
            <div className="container centeredText">
                <span><Link to='/'>List of all Posts</Link></span>
                <h2 id="postTitle">{this.state.post.title}</h2>
                <p id="postBody">{this.state.post.body}</p>
                <hr />
                <PostsFromSameAuthor />
            </div>
        );
    }
}


export default PostDetailsPage;