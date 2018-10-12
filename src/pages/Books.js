import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';
import ControlHeader from '../components/ControlHeader';
import List from '../components/List';
import TextContent from '../components/TextContent';

class Books extends React.Component {
  render() {
    return (
      <div>
        <PageTitle>Bookshelf</PageTitle>
        <ControlHeader addUrl={this.props.addBookUrl} />
        { this.props.books && this.props.books.length > 0 ?
          <List
            items={this.props.books}
            deleteHandler={this.props.deleteHandler}
          />
          :
          <TextContent>Please add a book to start!</TextContent>
        }
      </div>
    );
  }
}

Books.propTypes = {
  books: PropTypes.array,
  addBookUrl: PropTypes.string,
  deleteHandler: PropTypes.func
};

export default Books

