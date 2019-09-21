import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

let bookList = [
    {"title" : "Mukha Mo!", "author" : "Mark Vidad",  "pages": 350},
    {"title" : "El Filibusterismo", "author" : "Jose Rizal",  "pages": 200},
    {"title" : "Ang Alamat ng Tikbalang",  "pages": 0},
    {"title" : "Ang Alamat ng Tikbalang2", "author" : "Mila Kunis",  "pages": 125},
]

const Book = ({title="No Title", author="No Author", pages=0, freeBookmark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark today? {freeBookmark ? 'yes' : 'no'}</p>
        </section>
    )
}

const Hiring = () => 
    <div>
        <p>We are currenty hiring. Go to www.libary.com/jobs for more info.</p>
    </div>

const NotHiring = () => 
    <div>
        <p>We are not currenty hiring. Check back later for more info.</p>
    </div>

class Library extends Component {

    static defaultProps = {
        books: [
            {"title": "May Itlog sa Baki", "author": "Chet Whitley", "pages" : 1000}
        ]
    }

    state = {
        open: false,
        freeBookmark: true,
        hiring: true,
        data: [],
        loading: false
    };

    componentDidMount() {
        this.setState({loading: true});
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({data, loading: false}))
    }

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
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                {this.state.loading
                    ? "loading..." 
                    : <div>
                        {this.state.data.map(product => {
                            return (
                                <div key={product.id}>
                                    <h3>Library Product of the Week!</h3>
                                    <h4>{product.name}</h4>
                                    <img alt={product.name} src={product.image} height={200}/>
                                </div>
                            )
                        })}
                      </div>
                }
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

Library.propTypes = {
    books: PropTypes.array
}


Book.propTypes= {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}

render(
    <Library books={bookList}/>,
    document.getElementById('root')
)