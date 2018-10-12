import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class ListEntry extends React.Component {
  render() {
    return <tr>
      <td>
        <a href={this.props.url}>{this.props.title}</a>
      </td>
      <td>
        <div>{this.props.date}</div>
      </td>
      <td>
        <a href='#' onClick={this.props.deleteHandler}>
          <FontAwesomeIcon icon={faTrashAlt} size="xs">Delete</FontAwesomeIcon>
        </a>
      </td>
    </tr>
  }
}

ListEntry.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  deleteHandler: PropTypes.func
};

export default ListEntry
