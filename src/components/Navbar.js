import React, { useContext } from 'react';
import { BookContext } from "../contexts/BookContext";

export default function Navbar() {

    const { books } = useContext(BookContext);

    return (
        <div>
            <h1>Book List</h1>
            <p>You have {books.length} available</p>
        </div>
    )
}
