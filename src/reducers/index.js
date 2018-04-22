import { uniqueId } from '../actions';

const mockTasks = [ // #A
  {
    id: uniqueId(),
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'In Progress',
  },
  {
    id: uniqueId(),
    title: 'Peace on Earth',
    description: 'No big deal.',
    status: 'In Progress',
  },
];
export default function tasks(state = { tasks: mockTasks }, action) {
  console.log('reducers.index.js.tasks: state', state);
  console.log('reducers.index.js.tasks: action', action);

  if (action.type === 'CREATE_TASK') {
    return { tasks: state.tasks.concat(action.payload) };
  }

  return state
}
