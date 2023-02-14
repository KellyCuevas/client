import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_BOOK, GET_BOOKS } from '../queries/queries';

export default function DeleteBook({ book} ) {
  const [deleteBook] = useMutation(DELETE_BOOK, {
    variables: { id: book.id },
    refetchQueries: [{ query: GET_BOOKS }]
  });

  return (
    <button 
      className='delete-button'
      onClick={deleteBook}
      ><FaTrash/></button>
  )
}