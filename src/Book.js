import React from 'react';
import PropTypes from 'prop-types';

export const Book = ({title="No Title", author="No Author", pages=0, freeBookmark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark today? {freeBookmark ? 'yes' : 'no'}</p>
        </section>
    )
}

Book.propTypes= {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}