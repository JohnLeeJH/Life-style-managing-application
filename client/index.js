const Redux = require('redux')
const React = require('react')
const ReactDOM = require('react-dom')

function textInput(state = ['Complete project'], action) {
  switch (action.type) {
    case 'TASK_CREATED' :
      return state.concat(action.text)
    default:
      return state
  }
}

const store = Redux.createStore(textInput)

const taskList = props => {
  const { tasks } = props
  return (
  <div>
    <div className="md-form input-group">
      <input id="inputBox" type="search" className="form-control" placeholder="Add new tasks here"/>
        <span className="input-group-btn">
        <button id="add-button" className="btn btn-danger btn-lg" type="button">Add Task</button>
        </span>
    </div>
    <div className="container">
      <ul className="taskList">
        {tasks.map(function(task) {
          if (task)
          return (
            <li>
              { task }
              <div className="buttons">
              <button className="remove"><i id="delete-button" className="fa fa-trash-o"></i></button>
              <button className="complete"><i id="complete-button" className="fa fa-check"></i></button>
              </div>
            </li>
          )
        })}
        </ul>
    </div>
  </div>
  )
}

const render = () => {
  const tasks = store.getState()
  const elements = React.createElement(taskList, { tasks })
  const $tasks = document.querySelector('#task-manager')
  ReactDOM.render(elements, $tasks)
}

store.subscribe(render)

render()

document.querySelector('#add-button').addEventListener('click', function(event) {
  const $inputBox = document.querySelector('#inputBox')
  store.dispatch({ type: 'TASK_CREATED', text: $inputBox.value })
})
