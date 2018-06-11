import Post from '../entities/Post'

class PostsService {

    getPosts() {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                return data.map((post) => {
                    return new Post(post.title, post.id, post.body)
                })
            })
    }

    getPostDetails(id) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
    }
}

export default new PostsService();