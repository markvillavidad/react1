
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Book} from './Book';
import {Hiring} from './Hiring';
import {NotHiring} from './NotHiring'

export class Library extends Component {

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
