import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../queries/queries';
import Book from './Book';


function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if(loading) return <div>Loading books...</div>;
  if(error) return <div>Error : {error.message}</div>;
   
  return (
    <div>
      <ul id="book-list">
        {data.books.map(book => (
          <Book key={book.id} book={book} />
      
    ))}
      </ul>
    </div>
    );
  };


export default BookList;