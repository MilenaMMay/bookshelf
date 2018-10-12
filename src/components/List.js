import React from 'react'
import PropTypes from 'prop-types'
import ListEntry from './ListEntry'

class List extends React.Component {
  render() {
    return <table>
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
    </table>
  }
}

List.propTypes = {
  items: PropTypes.array,
  deleteHandler: PropTypes.func
};

export default List
