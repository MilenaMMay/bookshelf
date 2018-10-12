import React from 'react';
import PropTypes from 'prop-types';
import TextContent from './TextContent'

class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: '' }

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(value) {
    this.setState( { input: value } )
    this.props.inputHandler(value)
  }

  render() {
    return <div>
      <TextContent>{this.props.label}</TextContent>
      <textarea onChange={ (e) => { this.onChangeHandler(e.target.value) }}/>
    </div>
  }
}

TextInput.propTypes = {
  label: PropTypes.string,
  inputHandler: PropTypes.func.isRequired
};

export default TextInput;
