import React from 'react';
import DeleteBook from './DeleteBook';

export default function Book({ book }) {

  return (
    <div id='list-item'><li key={book.id} book={book}>{book.name}</li><DeleteBook book={book}/></div>
  )
}

