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

      render() {
            return  (
                  <React.Fragment>
                        <div className='Todo-List'>
                              {this.props.todos && this.props.todos.map(todo => (
                                    <h3 onClick={() => this.toggleTodo(todo.id)} key={todo.id}>
                                          {todo.name}
                                    </h3>
                              ))}
                        </div>
                  </React.Fragment>
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