import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INITS' });
  //Note that this stuff above is what redux does when it starts up
  //this can be seen in the redux devtools
  expect(state).toEqual ({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should setup sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should setup sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action );
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = 'this is my filter';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer (undefined, action);
  expect(state.text).toBe(text);
});

// test('should set start date filter', () => {
//   const startDate = moment();
//   const action = {
//     type: 'SET_START_DATE',
//     startDate
//   };
//   const state = filtersReducer(undefined, action);
//   expect(state.startDate).toEqual(startDate);
// });
//
// test('should set end date filter', () => {
//   const endDate = moment();
//   const action = {
//     type: 'SET_END_DATE',
//     endDate
//   };
//   const state = filtersReducer(undefined, action);
//   expect(state.endDate).toEqual(endDate);
// });
