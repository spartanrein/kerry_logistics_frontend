import _ from 'lodash'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import ListHeader from '../components/ListHeader'
import List from '../list/List';

const tableData = [
  { Time: '09:10:20', Location: 'B0901301', ProductID: 'A1' },
  { Time: '09:12:30', Location: 'A0501301', ProductID: 'A2' },
  { Time: '09:15:25', Location: 'A0101101', ProductID: 'B1' },
  { Time: '09:20:10', Location: 'B0101101', ProductID: 'B2' },
]

export default class TableExampleSortable extends Component {
  state = {
    column: null,
    data: tableData,
    direction: null,
  }

  handleReset = () => {
    this.setState({
      data: []
    })
  }


  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }
    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const { column, data, direction } = this.state

    return (
      <div>
        <button onClick = { this.handleReset }>Reset</button>

        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'Time' ? direction : null}
                onClick={this.handleSort('Time')}
              >
                Time
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'Location' ? direction : null}
                onClick={this.handleSort('Location')}
              >
                Location
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'ProductID' ? direction : null}
                onClick={this.handleSort('ProductID')}
              >
                ProductID
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(data, ({ Time, Location, ProductID }) => (
              <Table.Row key={Time}>
                <Table.Cell>{Time}</Table.Cell>
                <Table.Cell>{Location}</Table.Cell>
                <Table.Cell>{ProductID}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    )
  }
}