import React, {Component} from 'react';
import {render} from 'react-dom';

let bookList = [
    {"title" : "Mukha Mo!", "author" : "Mark Vidad",  "pages": 350},
    {"title" : "El Filibusterismo", "author" : "Jose Rizal",  "pages": 200},
    {"title" : "Ang Alamat ng Tikbalang", "author" : "Mila Kunis",  "pages": 250},
    {"title" : "Ang Alamat ng Tikbalang2", "author" : "Mila Kunis",  "pages": 125},
]


const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
        </section>
    )
}

class Library extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    render() {
        console.log(this.state)
        const { books } = this.props
        return (
            <div>
                <h1>The library is {this.state.open ? 'open' : 'closed'}! </h1>
                {books.map( (book, i) => 
                    <Book 
                        key={i}
                        title={book.title} 
                        author={book.author} 
                        pages={book.pages}
                    />
                )}
            </div> 
        )
    }
}



render(
    <Library books= {bookList}/>,
    document.getElementById('root')
)