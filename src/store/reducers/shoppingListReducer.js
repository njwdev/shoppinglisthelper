const initialState = {
  lists: [
    {
      id: '1',
      title: 'Groceries',
      items: [
        {
          item: 'chicken breasts',
          quantity: 2,
        },
        {
          item: 'green chillies',
          quantity: 5,
        },
        {
          item: 'milk',
          quantity: '2 litres',
        },
      ],
      sharedWith: 'Girlfriend',
      created: '12th December',
      lastUsed: 'Yesterday',
    },
    {
      id: '2',
      title: 'Holiday',
      items: [
        {
          item: 'goggles',
          quantity: 1,
        },
        {
          item: 'rental car',
          quantity: 1,
        },
        {
          item: 'suncream',
          quantity: '2 bottles',
        },
      ],
      sharedWith: 'Tom, Will',
      created: '12th October',
      lastUsed: 'Friday 14th May',
    },
  ],
};

const shoppingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_LIST':
      console.log('Created List', action.list);
      return state;
    case 'CREATE_LIST_ERROR':
      console.log('create list error', action.err);
      return state;
    default:
      return state;
  }
};

export default shoppingListReducer;
