import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import BookDetail from './pages/BookDetail';
import NewBook from './pages/NewBook';
import Books from './pages/Books';

class Bookshelf extends React.Component {
  constructor(props) {
    super(props)
    console.log('init')
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
    const nextId = 3
    console.log(this.state);
    const newBook = { id: nextId, title, details, date: '' }
    this.setState({books: [ ...this.state.books, newBook]}, () => {
      console.log(this.state)
      this.storeBooks(this.state.books)
      window.location.replace('/')
    })
  }

  deleteBookHandler(id) {
    console.log('delete: ' + id);
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

          <Route exact={true} path='/books/:bookId' render={() => (
            <BookDetail
              title='Foo'
              details='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
              backUrl='/'
            />
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Bookshelf

