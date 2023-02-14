import {gql} from '@apollo/client';


const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      name
      id
    }
  }
`;


const GET_BOOKS = gql`
  query GetBooks {
    books {
      name
      id
    }
  }
`;

const ADD_BOOK = gql`
  mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId){
      name
      id
    }
  }
`
const DELETE_BOOK = gql`
  mutation deleteBook($id: ID!) {
    deleteBook(id: $id){
      name
      id
    }
  }
`

export{GET_AUTHORS, GET_BOOKS, ADD_BOOK, DELETE_BOOK}