import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleTodo } from '../actions/index';

class TodoList extends React.Component {
      state = {
            newTodo: ''
      };

      handleChanges = e => {
            this.setState({ newTodo: e.target.value})
      }

      addTodo = e => {
            e.preventDefault();
            this.props.addTodo(this.state.newTodo);
            this.setState({ newTodo: '' })
      };

      toggleTodo = (e, i) => {
            e.preventDefault();
            this.props.toggleTodo(i);
      }

      render() {
            console.log(this.props)
            return  (
                  <div className='container'>
                        <h1 className='heady'>DO IT NOW</h1>
                        <div className='Todo-List'>
                              {this.props.todos.map((todo, i) => (
                                    <p>
                                          {todo.value}
                                    </p>

                              ))}

                        </div>
                        <input
                              type='text'
                              placeholder='do something else?'
                              value={this.state.newTodo}
                              onChange={this.handleChanges}
                        >
                        </input>
                        <button onClick={this.addTodo}>Gimme</button>
                  </div>
            )
      }
}

const mapStateToProps = state => {
      return {
            todos: state.todos
      };
};

export default connect(
      mapStateToProps,
      { addTodo, toggleTodo } 
)(TodoList);