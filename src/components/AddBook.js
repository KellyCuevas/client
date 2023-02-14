import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_AUTHORS, ADD_BOOK, GET_BOOKS } from '../queries/queries';




function AddBook() {
  const [values, setValues] = useState({
    name: '',
    genre: '',
    authorId: ''
  })

  const [addBook] = useMutation(ADD_BOOK); 
  const { loading, error, data } = useQuery(GET_AUTHORS);

  if(loading) return <option disabled>Loading Authors...</option>;
  if(error) return <div>Error : {error.message}</div>;
  
 

  const handleSubmit = (e) => {
    e.preventDefault();
      addBook({
      variables: {
        name: values.name,
        genre: values.genre,
        authorId: values.authorId
      },
      refetchQueries: [{ query: GET_BOOKS }]
    });
    setValues((values) => ({
      name: '',
      genre: '',
      authorId: ''
    }))
  };

  const handleBookNameChange = (e) => {
    e.preventDefault();
    setValues((values) => ({
      ...values,
      name: e.target.value,
    }));
  };
  
  const handleGenreChange = (e) => {
    e.preventDefault();
    setValues((values) => ({
      ...values,
      genre: e.target.value,
    }));
  };

  const handleAuthorChange = (e) => {
    e.preventDefault();
    setValues((values) => ({
      ...values,
      authorId: e.target.value,
    }));
  };

    return (
     <form id='add-book' onSubmit={handleSubmit}>

      <div className='field'>
        <label>Book name:</label>
        <input 
          id='book-name'
          type='text' 
          name='bookName'
          value={values.name}
          onChange={handleBookNameChange}
        />
      </div>

      <div className='field'>
        <label> Genre:</label>
        <input
         id='genre'
         type='text'
         name='genre'
         value={values.genre}
         onChange={handleGenreChange}
         />
      </div>

      <div className='field'>
        <label>Author</label>
        <select 
          id='author' 
          name='author' 
          value={values.author} 
          onChange={handleAuthorChange}
          >
          <option>Select Author</option>
          { data.authors.map(author => (
      <option key={author.id} value={author.id}>{author.name}</option>
      ))}
        </select>
      </div>

      <button>Add Book</button>

     </form>
    );
  }


export default AddBook;