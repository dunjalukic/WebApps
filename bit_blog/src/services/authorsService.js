import Author from '../entities/Author'

class AuthorsService {
    getAuthors() {
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                return data.map((author) => {
                    return new Author(author.name, author.id)
                })
            })
    }
}

export default new AuthorsService();