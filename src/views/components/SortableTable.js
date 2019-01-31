import sortBy from 'lodash/sortBy';
import map from 'lodash/map';
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import QRCode from 'qrcode.react';
import CallApi from './CallApi';

const tableData = [
  { time: '09:10:20', location: 'B0901301', productId: 'A1' },
  { time: '09:12:30', location: 'A0501301', productId: 'A2' },
  { time: '09:15:25', location: 'A0101101', productId: 'B1' },
  { time: '09:20:10', location: 'B0101101', productId: 'B2' },
]

export default class SortableTable extends Component {
  
  state = {
    column: null,
    data: tableData,
    direction: null,
  }
  handleCallApi = () => {
    this.setState({
      data: CallApi.handleCallApi()
    })
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
        data: sortBy(data, [clickedColumn]),
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
                LocationQR
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
                ProductQR
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'Location' ? direction : null}
                onClick={this.handleSort('Location')}
              >
                ProductID
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {map(data, ({ time, location, productId}) => (
              <Table.Row key={time}>
                <Table.Cell>{time}</Table.Cell>
                <Table.Cell><QRCode value={location}/></Table.Cell>
                <Table.Cell>{location}</Table.Cell>
                <Table.Cell><QRCode value={productId}/></Table.Cell>
                <Table.Cell>{productId}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    )
  }
}