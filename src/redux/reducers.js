import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const items = createReducer(initialState, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
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
