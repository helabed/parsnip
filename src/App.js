import React, { Component } from 'react';
import { connect } from 'react-redux';
import TasksPage from './components/TasksPage';
import { createTask, editTask, fetchTasks } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTasks());
  }

  onCreateTask = ({ title, description }) => {
    console.log('App.onCreateTask: { title, description }', { title, description });
    this.props.dispatch(createTask({ title, description }));
  }

  onStatusChange = ( id, status ) => {
    console.log('App.onStatusChange: { id, status }', { id, status });
    this.props.dispatch(editTask(id, { status }));
  }

  render() {
    console.log('props from App: ', this.props);
    return (
      <div className="main-content">
        <TasksPage
          tasks={this.props.tasks}
          onCreateTask={this.onCreateTask}
          onStatusChange={this.onStatusChange}
        />
      </div>
    );
  }
}

function mapStateToProps(state) { //#C
  return {
    tasks: state.tasks  //#D
  }
}
export default connect(mapStateToProps)(App);
// export default App;
