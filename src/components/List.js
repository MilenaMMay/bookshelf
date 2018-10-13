import React from 'react'
import PropTypes from 'prop-types'
import ListEntry from './ListEntry'
import styled from 'styled-components'

const ListTable = styled.table`
  width: 100%;
`

class List extends React.Component {
  render() {
    return <ListTable>
      <tbody>
        { this.props.items.map((item) =>
          <ListEntry
            key={item.id}
            url={item.url}
            title={item.title}
            deleteHandler={() => {this.props.deleteHandler(item.id)}}
          />
        )}
      </tbody>
    </ListTable>
  }
}

List.propTypes = {
  items: PropTypes.array,
  deleteHandler: PropTypes.func
};

export default List
