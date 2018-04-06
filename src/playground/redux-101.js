import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy //This is a simplified version of the line below because
  //the property has the same name
  // incrementBy: incrementBy
});

const decrementCount = ({decrementBy  = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count}) => ({
    type: 'SET',
    count
});

const countReducer = (state = {count:0}, action) => {
  switch (action.type) {
    case 'INCREMENT' :
    return {
      count: state.count + action.incrementBy
    };
    case 'DECREMENT' :
    return {
      count: state.count - action.decrementBy
    };
    case 'SET' :
    return {
      count: action.count
    };
    case 'RESET' :
    return {
      count: 0
    };
  default:
  return state;
  }
};


const store = createStore (countReducer);

  store.subscribe(() => {
    console.log(store.getState());
    // console.log('subscribing');
  });

  // store.dispatch ({
  //   type: 'SET',
  //   count: 101
  // });


store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({count: 223}));
store.dispatch(decrementCount({decrementBy: 5}));
store.dispatch(decrementCount({decrementBy: 15}));
store.dispatch(decrementCount({decrementBy: 55}));
store.dispatch(incrementCount({incrementBy: 100}));



// store.dispatch ({
//   type: 'INCREMENT'
// });
//
// store.dispatch ({
//   type: 'INCREMENT'
// });
//
// store.dispatch ({
//   type: 'DECREMENT',
//   decrementBy: 10
// });
//
// store.dispatch ({
//   type: 'DECREMENT'
// });

store.dispatch ({
  type: 'RESET'
});
