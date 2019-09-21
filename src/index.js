import React, {Component} from 'react';
import {render} from 'react-dom';
import {Library} from './Library';


let bookList = [
    {"title" : "Mukha Mo!", "author" : "Mark Vidad",  "pages": 350},
    {"title" : "El Filibusterismo", "author" : "Jose Rizal",  "pages": 200},
    {"title" : "Ang Alamat ng Tikbalang",  "pages": 0},
    {"title" : "Ang Alamat ng Tikbalang2", "author" : "Mila Kunis",  "pages": 125},
]

render(
    <Library books={bookList}/>,
    document.getElementById('root')
)