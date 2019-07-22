import React, { Component } from 'react';
import PageContainer from '../../layout/PageContainer';
import MaterialTable from 'material-table';
import { connect } from 'react-redux';

class ShoppingList extends Component {
  render() {
    const { shoppingList } = this.props;
    console.log(shoppingList[0]);
    console.log(this.props);

    const id = this.props.match.params.id;
    return (
      <PageContainer>
        <MaterialTable
          title={id + ': ' + shoppingList[0].title}
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
          data={shoppingList[0].items}
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

const mapStateToProps = state => {
  return {
    shoppingList: state.shoppingList.lists,
  };
};

export default connect(mapStateToProps)(ShoppingList);
