import React from 'react';
import ReactDOM from 'react-dom';

var TodoForm = function({addTodo}) {
  // Tracks the input
  var input;

  return (
    <form className="c-todo-input" onSubmit={function(e) {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}>
      <input className="e-input" placeholder="Add a task" ref={ node => {
        input = node;
      }} />
      <br />
    </form>
  );
};

var Todo = function({todo, remove, toggleTodoClass}) {
  return (
      <div className={ "c-todo " + todo.class }
        onClick={ function() {toggleTodoClass(todo.id, todo)} }>
        <p className="e-item">
          <span className="e-text">{ todo.text }</span>
          <span className="e-remove" onClick={ function() {remove(todo.id)} }>
            <i className="material-icons">close</i>
          </span>
        </p>
      </div>
    );
}

var TodoList = function({todos, remove, toggleTodoClass}) {
  // Map through all the todos
  var todoItem = todos.map(function(todo) {
    return (
      <Todo toggleTodoClass={ toggleTodoClass } todo={ todo } key={ todo.id } remove={ remove } />
    );
  });
  return (<section className="c-todo-list">{ todoItem }</section>);
}

// Component
var TodoApp = React.createClass({
  getInitialState: function() {
    this.apiUrl = '//581cbbd628a03411009e591c.mockapi.io/stack';
    return {
      data: []
    };
  },

  componentDidMount: function() {
    // HTTP request with Axios
    axios.get(this.apiUrl)
      .then((res) => {
        // Set state with result
        this.setState({data: res.data});
      });
  },

  // Handler addTodo
  addTodo: function(val) {
    // Gather data
    var todo = {
      text: val,
      class: 'v-undone'
    }

    // Check for valid input
    if (todo.text == '') {
      return
    }

    // Update data
    axios.post(this.apiUrl, todo)
      .then((res) => {
        this.state.data.push(res.data);
        this.setState({data: this.state.data});
      });
  },

  handleRemove: function(id) {
    // Filter all todos except the one to be removed
    var remainder = this.state.data.filter(function(todo) {
      if(todo.id !== id) return todo;
    });

    // Update state with filter
    axios.delete(this.apiUrl+'/'+id)
      .then((res) => {
        this.setState({data: remainder});
      })
  },

  toggleTodoClass: function(id, todo) {
    // Change the class of the todo (id)
    if(todo.id == id && todo.class != 'v-done') {
      todo.class = 'v-done';
    } else {
      todo.class = 'v-undone';
    }

    // Update state with filter
    axios.put(this.apiUrl+'/'+id, todo)
    .then((res) => {
      this.state.data.push(res.data);
      this.setState({data: this.state.data});
    });
  },

  render: function() {
    // Render JSX
    return (
      <div>
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove}
          toggleTodoClass={this.toggleTodoClass}
        />
      <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
