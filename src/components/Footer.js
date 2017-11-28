import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <div class="todo-footer">
    Filter Your List:
    {' '}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">
      Left
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">
      Done
    </FilterLink>
  </div>
)

export default Footer