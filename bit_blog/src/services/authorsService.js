import Author from '../entities/Author'

class AuthorsService {

    getAuthors() {
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                return data.map(author => {
                    return new Author(author.name, author.id, author.username, author.email, author.phone, author.address.street, author.address.city, author.address.zipcode, author.company.name, author.company.catchPhrase)
                })
            })
    }


    getAuthorDetails(id) {
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
    }
}

export default new AuthorsService();