import React, {Component} from 'react';
import {render} from 'react-dom';

let bookList = [
    {"title" : "Mukha Mo!", "author" : "Mark Vidad",  "pages": 350},
    {"title" : "El Filibusterismo", "author" : "Jose Rizal",  "pages": 200},
    {"title" : "Ang Alamat ng Tikbalang", "author" : "Mila Kunis",  "pages": 250},
    {"title" : "Ang Alamat ng Tikbalang2", "author" : "Mila Kunis",  "pages": 125},
]


const Book = ({title, author, pages, freeBookmark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark today? {freeBookmark ? 'yes' : 'no'}</p>
        </section>
    )
}

class Library extends Component {

    state = {
        open: false,
        freeBookmark: true
    };

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render() {
        console.log(this.state)
        const { books } = this.props
        return (
            <div>
                <button onClick={this.toggleOpenClosed}>Toggle Me!</button>
                <h1>The library is {this.state.open ? 'open' : 'closed'}! </h1>
                {books.map( (book, i) => 
                    <Book 
                        key={i}
                        title={book.title} 
                        author={book.author} 
                        pages={book.pages}
                        freeBookmark={this.state.freeBookmark}
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