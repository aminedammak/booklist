import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';
import { parse } from '@babel/core';

export const BookContext = createContext();

export default function BookContextProvider(props) {

    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const result = localStorage.getItem('books');
        return result ? JSON.parse(result) : []
    })

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books])

    return (
        <BookContext.Provider value={{
            books,
            dispatch
        }}>
            {props.children}
        </BookContext.Provider>
    )
}
