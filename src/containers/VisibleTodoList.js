import { connect } from 'react-redux'
import { toggleTodo,deleteTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed && !t.deleted)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed && !t.deleted)
    case 'SHOW_ALL':
    default:
      return todos.filter(t => !t.deleted)
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    },
    onTodoDelete: id => {
      dispatch(deleteTodo(id)) 
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList