import React, { Component } from 'react';
import PageContainer from '../../layout/PageContainer';
import MaterialTable from 'material-table';

const shoppingListItems = [
  { item: 'Bread', quantity: 1 },
  {
    item: 'Chicken breasts',
    quantity: 2,
  },
  {
    item: 'Bottled water',
    quantity: '6 litres',
  },
  {
    item: 'Bottled water',
    quantity: '6 litres',
  },
  {
    item: 'Bottled water',
    quantity: '6 litres',
  },
  {
    item: 'Bottled water',
    quantity: '6 litres',
  },
  {
    item: 'Bottled water',
    quantity: '6 litres',
  },
];

class ShoppingList extends Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <PageContainer>
        <MaterialTable
          title={id}
          options={{
            actionsCellStyle: {
              backgroundColor: null,
              border: undefined,
            },

            padding: 'dense',
            search: false,
          }}
          columns={[
            { title: 'Item', cellStyle: { cursor: 'default' }, field: 'item' },
            {
              title: 'Quantity',
              cellStyle: { cursor: 'default' },
              field: 'quantity',
            },
          ]}
          data={shoppingListItems}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  // const data = [...state.data];
                  // data.push(newData);
                  // setState({ ...state, data });
                }, 600);
              }),
          }}
          actions={[
            {
              icon: 'done',
              tooltip: 'Purchased item',
              onClick: (event, rowData) =>
                alert('You clicked on ' + rowData.item),
            },
            {
              icon: 'warning',
              tooltip: 'There was a problem',
              onClick: (event, rowData) =>
                alert('You clicked on ' + rowData.item),
            },
            {
              icon: 'delete',
              tooltip: 'Delete item',
              onClick: (event, rowData) =>
                alert('You clicked on ' + rowData.item),
            },
          ]}
        />
      </PageContainer>
    );
  }
}

export default ShoppingList;
