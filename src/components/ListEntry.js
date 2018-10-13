import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import designPrinciples from '../designPrinciples';
import ColoredLink from './ColoredLink'

const EntryLink = styled.a`
  color: ${designPrinciples.colorDark};
  font-family: ${designPrinciples.fontStandard};
`

const EntryRow = styled.tr`
  &:nth-child(even) {
    background-color: ${designPrinciples.colorLight};
  }

`

class ListEntry extends React.Component {
  render() {
    return <EntryRow>
      <td>
        <EntryLink href={this.props.url}>{this.props.title}</EntryLink>
      </td>
      <td>
        <ColoredLink href='#' onClick={(e) => { e.preventDefault(); this.props.deleteHandler() }}>
          <FontAwesomeIcon icon={faTrashAlt} size="xs">Delete</FontAwesomeIcon>
        </ColoredLink>
      </td>
    </EntryRow>
  }
}

ListEntry.propTypes = {
  url: PropTypes.string.required,
  title: PropTypes.string.required,
  deleteHandler: PropTypes.func.required
};

export default ListEntry
