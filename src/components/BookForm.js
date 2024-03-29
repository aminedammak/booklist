import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import uuid from 'uuid';

export default function BookForm() {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const { dispatch } = useContext(BookContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_BOOK", book: { title, author, id: uuid() } });
        setTitle("");
        setAuthor("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Book title</label>
                <input value={title} type="text" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Author</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    );
}
