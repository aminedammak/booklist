import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

export default function BookDetails({ book }) {
    const { dispatch } = useContext(BookContext);
    return (
        <li onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
            {book.title} for {book.author}
        </li>
    )
}
