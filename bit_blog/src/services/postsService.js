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
}

export default new PostsService();