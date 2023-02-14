
//componenets
import BookList from './components/BookList';
import AddBook from './components/AddBook';



function App() {
  return (
       <div id="main">
        <h1>Kelly's Reading List</h1>
        <BookList />
        <AddBook />
      </div>
  );
}

export default App;
