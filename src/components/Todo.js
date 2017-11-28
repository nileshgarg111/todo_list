import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, onDelete,completed, text }) => (
  <li class="ui-state-default">
  <div class="checkbox">
  <label onClick={onClick} 
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      width: '70%'
    }}>
    {text}
  </label>

  <a onClick={onDelete} class="btn btn-primary a-btn-slide-text">
       <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        <span>Delete</span>            
    </a>
  </div>  
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo