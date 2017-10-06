import React from 'react';
import TodoList from './TodoList.js';
import InputLine from './InputLine.js';

const dummyData = [
  { taskText: "Come to San Fran", completed: false },
  { taskText: "Learn React", completed: true },
  { taskText: "Profit", completed: false }
];

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({
      todos: dummyData
    })
  }

  addTodo(task) {
    dummyData.push({ taskText: task, completed: false });
    this.setState({ todos: dummyData });
  }

  render() {
    return (
      <div>
        <InputLine submit={(t) => this.addTodo(t)}/>
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default TodoApp;
