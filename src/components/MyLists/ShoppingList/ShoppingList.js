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
    return (
      <PageContainer>
        <MaterialTable
          title="Groceries"
          options={{
            actionsCellStyle: {
              backgroundColor: null,
              border: undefined,
            },

            padding: 'dense',
            search: false,
          }}
          columns={[
            { title: 'Item', field: 'item' },
            {
              title: 'Quantity',

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
            // {
            //   icon: 'edit',
            //   tooltip: 'Edit item',
            //   onClick: (event, rowData) =>
            //     alert('You clicked on ' + rowData.item),
            // },
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
