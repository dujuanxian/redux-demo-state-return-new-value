import './styles.css';
import { createStore } from 'redux';

// example to show change state direcately at reducer
// will not trigger React Component re-render,
// It is because the state is the same.

const reducer = (state = { value: 1 }, action) => {
  if (action === 'GET_VALUE') {
    return state.value + action.payload.amount;
  }
  return state;
};
const store = createStore(reducer);

const preState = store.getState();
store.dispatch({
  type: 'GET_VALUE',
  payload: {
    amount: 2
  }
});
const curState = store.getState();
console.log(preState === curState);
