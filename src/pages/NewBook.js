import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';
import TextInput from '../components/TextInput';
import PrimaryCommand from '../components/PrimaryCommand';
import SecondaryCommand from '../components/SecondaryCommand';

class NewBook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      details: ''
    }

    this.onClickHandler = this.onClickHandler.bind(this);
    this.titleInputHandler = this.titleInputHandler.bind(this);
    this.detailsInputHandler = this.detailsInputHandler.bind(this);
  }

  onClickHandler(e) {
    e.preventDefault()
    this.props.saveHandler(this.state.title || '', this.state.details || '')
  }

  titleInputHandler(title) {
    this.setState({title})
  }

  detailsInputHandler(details) {
    this.setState({details})
  }

  render() {
    return (
      <div>
        <PageTitle>{this.props.title}</PageTitle>
        <TextInput inputHandler={this.titleInputHandler}/>
        <TextInput inputHandler={this.detailsInputHandler}/>
        <SecondaryCommand href={this.props.backUrl}>cancel</SecondaryCommand>
        <PrimaryCommand onClick={(e) => { this.onClickHandler(e) }}>save</PrimaryCommand>
      </div>
    );
  }
}

NewBook.propTypes = {
  saveHandler: PropTypes.func.isRequired,
  backUrl: PropTypes.string.isRequired
};

export default NewBook
