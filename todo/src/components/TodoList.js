import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/index';

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
                                    <h3 onClick={() => this.toggleMember(member.id)} key={member.id}>
                                          {todo.name}
                                    </h3>
                              ))}
                        </div>
                  </React.Fragment>
            )
      }
}