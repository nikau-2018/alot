import React, {Component} from 'react'
import {Icon, Menu, Table} from 'semantic-ui-react'

import OrderCard from '../OrderCard'

export default class Orders extends Component {
  componentDidMount () {
    this.props.fetchOrders()
  }

  render () {
    const orders = this.props.orders
    return (
      <div className='orders'>
        <h2>Orders</h2>
        {/* <Card.Group>
          {orders && orders.map(order =>
            <OrderCard key={order.id} order={order}/>
          )}
        </Card.Group> */}
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                Order <Icon name='dolly flatbed' />
              </Table.HeaderCell>
              <Table.HeaderCell>
                Tool <Icon name='cog' />
              </Table.HeaderCell>
              <Table.HeaderCell>
                Status
              </Table.HeaderCell>
              <Table.HeaderCell>
                User <Icon name='user' />
              </Table.HeaderCell>
              <Table.HeaderCell>
                Email <Icon name='mail' />
              </Table.HeaderCell>
              <Table.HeaderCell>
                Phone <Icon name='phone' />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {orders && orders.map(order =>
              <OrderCard key={order.id} order={order}/>
            )}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='6'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    )
  }
}
