import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import BookDetail from './pages/BookDetail';
import NewBook from './pages/NewBook';
import Books from './pages/Books';

class Bookshelf extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: this.loadBooks()
    }

    this.saveNewBookHandler = this.saveNewBookHandler.bind(this);
    this.deleteBookHandler = this.deleteBookHandler.bind(this);
  }

  loadBooks() {
    const books = localStorage.getItem('bookshelfStorage')
    if (books) {
      return JSON.parse(books)
    } else {
      return []
    }
  }

  storeBooks(books) {
    localStorage.setItem('bookshelfStorage', JSON.stringify(books))
  }

  saveNewBookHandler(title, details) {
    const id = this.nextId()
    const newBook = { id, title, details, url: 'books/' + id }
    this.setState({books: [ ...this.state.books, newBook]}, () => {
      this.storeBooks(this.state.books)
      window.location.replace('/')
    })
  }

  deleteBookHandler(id) {
    this.setState({books: this.state.books.filter(book => book.id !== id) }, () => {
      this.storeBooks(this.state.books)
    })
  }

  nextId() {
    const ids = this.state.books.map(book => book.id)
    if (ids.length === 0) {
      return 0
    } else {
      return Math.max(...ids) + 1
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <Books books={this.state.books} addBookUrl='/new' deleteHandler={this.deleteBookHandler} />
          )}/>

          <Route exact={true} path='/new' render={() => (
            <NewBook
              saveHandler={this.saveNewBookHandler}
              backUrl='/'
            />
          )}/>

          <Route exact={true} path='/books/:bookId' render={({match}) => (
            <BookDetail
              book={ this.state.books.find(book => book.id === parseInt(match.params.bookId)) }
              backUrl='/'
            />
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Bookshelf

