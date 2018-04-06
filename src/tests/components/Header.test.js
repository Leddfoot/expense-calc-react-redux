import React from 'react';
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


//
//
// ENZYME WOULD NOT CONFIGURE!!!!!!
//



// import Header from '../../components/Header';
// import { shallow } from 'enzyme;'
//
// test('should render Header correctly', () => {
//   // const renderer = new ReactShallowRenderer();
//   // renderer.render(<Header />);
//   // expect(renderer.getRenderOutput()).toMatchSnapshot();
//   const wrapper = shallow(<Header />);
// });
test ('should setup edit expense action object', () => {
  const action = editExpense('123abc', {note: 'fake new value'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
          note: 'fake new value'
    }
  });
});
