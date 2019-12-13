import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';
import uuid from "uuid";

export default function BookList() {

    const { books } = useContext(BookContext);

    return books.length > 0 ? (
        <div>
            {books.map(book => {
                return (<BookDetails key={book.id} book={book} />)
            })}
        </div>
    ) : (
            <p>No books to read.</p>
        )
}