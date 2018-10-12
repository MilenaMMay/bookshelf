import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';
import TextContent from '../components/TextContent';
import SecondaryCommand from '../components/SecondaryCommand';

class BookDetail extends React.Component {
  render() {
    return (
      <div>
        <PageTitle>{this.props.title}</PageTitle>
        <TextContent>{this.props.details}</TextContent>
        <SecondaryCommand href={this.props.backUrl}>Back</SecondaryCommand>
      </div>
    );
  }
}

BookDetail.propTypes = {
  title: PropTypes.string,
  details: PropTypes.string,
  backUrl: PropTypes.string
};

export default BookDetail

