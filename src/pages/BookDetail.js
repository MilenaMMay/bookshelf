import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';
import TextContent from '../components/TextContent';
import SecondaryCommand from '../components/SecondaryCommand';

class BookDetail extends React.Component {
  render() {
    return (
      <div>
        <PageTitle>{this.props.book.title}</PageTitle>
        <TextContent>{this.props.book.details}</TextContent>
        <SecondaryCommand href={this.props.backUrl}>Back</SecondaryCommand>
      </div>
    );
  }
}

BookDetail.propTypes = {
  book: PropTypes.obj,
  backUrl: PropTypes.string
};

export default BookDetail

