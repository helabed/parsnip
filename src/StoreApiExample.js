import { createStore } from 'redux';
function counterReducer(state = 0, action) {  //#A
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  return state;
}
const store = createStore(counterReducer);       //#B
console.log(store.getState());  //#C
store.subscribe(() => {  //#D
  console.log('current state: ', store.getState());
});
store.dispatch({ type: 'INCREMENT' });  //#E
