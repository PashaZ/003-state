import React from 'react';
import { Component } from 'react';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';

// import ColorPicker from './components/ColorPicker';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
class App extends Component {
  state = {
    todos: initialTodos,
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0,);
    return (
      <div>
        <h1>Стан компонента</h1>
        <p>Загальна кількість завдань: {todos.length}</p>
        <p>Кількість виконаних завдань: {completedTodos}</p>
        {/* <Counter />,
        <Dropdown />,
        <ColorPicker options={colorPickerOptions} />, */}
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  };
}

export default App;

