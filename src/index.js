import React from 'react';
import {render} from 'react-dom';


const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
        </section>
    )
}

render(
    <div>
        <Book title="The Sun Also Rises" author="Mark Vidad" pages={450} />
        <Book title="El Filibusterismo" author="Jose Rizal" pages={300} />
    </div>,
    document.getElementById('root')
)