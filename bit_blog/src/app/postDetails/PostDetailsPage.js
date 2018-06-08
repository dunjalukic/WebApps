import React, { Component } from 'react';
import PostList from './PostList';
import postsService from '../../services/postsService';

class HomePage extends Component {
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
                <h3>POSTS</h3>
                <PostList posts={this.state.posts} />
            </div>

        );
    }
}

export default HomePage;