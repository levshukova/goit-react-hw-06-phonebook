import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

// const items = (state = [], action) => {
//   switch (action.type) {
//     case 'phonebook/addContact':
//       return [...state, action.payload];

//     case 'phonebook/deleteContact':
//       return state.filter(({ id }) => id !== action.payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', action) => {
//   switch (action.type) {
//     case 'phonebook/changeFilter':
//       return action.payload;

//     default:
//       return state;
//   }
// };
