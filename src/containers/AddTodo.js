import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input class="form-control add-todo"
          ref={node => {
            input = node
          }}
        />
        <button id="checkAll" class="btn btn-success" type="submit">
          Add Todo
        </button><hr></hr>
      </form> 
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo