import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import ColoredLink from './ColoredLink'

class ControlHeader extends React.Component {
  render() {
    return <div>
      <ColoredLink href={this.props.addUrl}>
        <FontAwesomeIcon icon={faPlusCircle} size="2x">+</FontAwesomeIcon>
      </ColoredLink>
      <hr/>
    </div>
  }
}

ControlHeader.propTypes = {
  addUrl: PropTypes.string
};

export default ControlHeader
