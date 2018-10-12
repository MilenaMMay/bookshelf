import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import BookDetail from './pages/BookDetail';
import Books from './pages/Books';

class Bookshelf extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [
        {
          id: 1,
          url: '/books/1',
          title: 'Foo bar - bar foo!',
          date: '10/12/2018'
        },
        {
          id: 2,
          url: '/books/2',
          title: 'Bar bar - foo foo!',
          date: '11/12/2018'
        }
      ]
    }

    this.deleteBookHandler = this.deleteBookHandler.bind(this);
  }

  deleteBookHandler(id) {
    console.log('delete: ' + id);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <Books books={this.state.books} addBookUrl='/' deleteHandler={this.deleteBookHandler} />
          )}/>

          <Route path='/books/:bookId' render={() => (
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

