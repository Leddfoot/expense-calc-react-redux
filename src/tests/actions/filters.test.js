import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount
} from '../../actions/filters.js';

test ('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  });
});

test ('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  });
});

test ('should generate set text filter action object default empty', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test ('should generate set text filter action object with text object', () => {
  const bullshitText = 'bullshit'
  const action = setTextFilter(bullshitText);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'bullshit'
  });
});

test ('should generate the sortByDate action object', () => {
  const action = sortByDate();
  expect(action).toEqual({type: 'SORT_BY_DATE'});
});

test ('should generate the sortByamount action object', () => {
  const action = sortByAmount();
  //this or the example above is valid
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});
