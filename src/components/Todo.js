import React, { useState, useEffect } from 'react';
import axios from 'axios';

// TodoForm component
const TodoForm = ({ addTodo }) => {
  let input;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.value.trim() === '') return;
    addTodo(input.value);
    input.value = '';
  };

  return (
    <form className="c-todo-input" onSubmit={handleSubmit}>
      <input
        className="e-input"
        placeholder="Add a task"
        ref={(node) => { input = node; }}
      />
      <br />
    </form>
  );
};

// Todo component
const Todo = ({ todo, remove, toggleTodoClass }) => {
  return (
    <div
      className={`c-todo ${todo.class}`}
      onClick={() => toggleTodoClass(todo.id, todo)}
    >
      <p className="e-item">
        <span className="e-text">{todo.text}</span>
        <span
          className="e-remove"
          onClick={(e) => {
            e.stopPropagation(); // prevent triggering toggle
            remove(todo.id);
          }}
        >
          <i className="material-icons">close</i>
        </span>
      </p>
    </div>
  );
};

// TodoList component
const TodoList = ({ todos, remove, toggleTodoClass }) => {
  return (
    <section className="c-todo-list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          remove={remove}
          toggleTodoClass={toggleTodoClass}
        />
      ))}
    </section>
  );
};

// Main TodoApp component
const TodoApp = () => {
  const apiUrl = '//581cbbd628a03411009e591c.mockapi.io/stack';
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch initial todos
    axios.get(apiUrl).then((res) => setData(res.data));
  }, [apiUrl]);

  const addTodo = (val) => {
    const todo = { text: val, class: 'v-undone' };
    axios.post(apiUrl, todo).then((res) => setData((prev) => [...prev, res.data]));
  };

  const handleRemove = (id) => {
    axios.delete(`${apiUrl}/${id}`).then(() =>
      setData((prev) => prev.filter((todo) => todo.id !== id))
    );
  };

  const toggleTodoClass = (id, todo) => {
    const updatedTodo = { ...todo, class: todo.class === 'v-done' ? 'v-undone' : 'v-done' };
    axios.put(`${apiUrl}/${id}`, updatedTodo).then((res) => {
      setData((prev) =>
        prev.map((t) => (t.id === id ? res.data : t))
      );
    });
  };

  return (
    <div>
      <TodoList todos={data} remove={handleRemove} toggleTodoClass={toggleTodoClass} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default TodoApp;
