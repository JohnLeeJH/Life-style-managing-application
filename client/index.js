const React = require('react')
const ReactDOM = require('react-dom')
const Redux = require('redux')

const tasks = (state = [{ id: 0, text: 'Interview on Wednesday'}], action) => {
  switch (action.type) {
    case 'TASK_CREATE' :
      return state.concat(action.task)
    case 'TASK_DELETE' :
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1)
      ]
    default:
      return state
  }
}

const store = Redux.createStore(tasks)

const TaskList = props => {
  return (
    <div>
      <div className="md-form input-group">
        <input id="inputBox" type="search" className="form-control" placeholder="Add new tasks here"/>
          <span className="input-group-btn">
          <button id="add-button" className="btn btn-danger btn-lg" type="button" onClick={ taskCreate }>Add Task</button>
          </span>
      </div>
      {props.state.map(function(task, i) {
        return (
          <ul className="taskList"  key={i}>
            <p id="time">{new Date().toDateString()}</p>
            <li className="completed">
              <span>{ task.text }</span>
              <div className="buttons">
                <button><i className="fa fa-trash" id={ task.id } onClick={ taskDelete }></i></button>
                <button><i className="fa fa-check" onClick={ tastCompleted }></i></button>
              </div>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

var newId = 1
function getId() {
  const taskId = newId
  newId += 1
  return taskId
}

const taskCreate = event => {
  const newTask = document.querySelector('#inputBox')
  store.dispatch({
    type: 'TASK_CREATE',
    task: {
      id: getId(),
      text: newTask.value
    }
  })
}

const taskDelete = event => {
  store.dispatch({
    type: 'TASK_DELETE',
    id: event.target.id // need to fix matching id issue
  })
}

const tastCompleted = event => {
  store.dispatch({
    type: 'TASK_COMPLETED'
  })
}

const render = () => {
  const state = store.getState()
  const elements = React.createElement(TaskList, { state })
  ReactDOM.render(elements, document.querySelector('#task-manager')
  )
}

render()

store.subscribe(render)

window.store = store
