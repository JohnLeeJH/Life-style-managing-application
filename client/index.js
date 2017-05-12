const Redux = require('redux')
const React = require('react')
const ReactDOM = require('react-dom')

function textInput(state=[{id: 0, text: 'Complete project'}], action) {
  switch (action.type) {
    case 'TASK_CREATED' :
      return state.concat({text:action.text, id:action.id})
    case 'TASK_DELETED' :
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1)
      ]
    default:
      return state
  }
}

const store = Redux.createStore(textInput)
window.store = store
const TaskList = props => {
  return (
    <div>
      <div className="md-form input-group">
        <input id="inputBox" type="search" className="form-control" placeholder="Add new tasks here"/>
          <span className="input-group-btn">
          <button id="add-button" className="btn btn-danger btn-lg" type="button">Add Task</button>
          </span>
      </div>
      {props.tasks.map(function(task, i) {
        return (
          <li className="completed" key={i}>
            <span>{ task.text }</span>
            <div className="buttons">
              <button><i id={ task.id } className="fa fa-trash"></i></button>
              <button><i id={ task.id } className="fa fa-check"></i></button>
            </div>
          </li>
        )
      })}
    </div>
  )
}

const render = () => {
  const tasks = store.getState()
  const elements = React.createElement(TaskList, { tasks })
  const $tasks = document.querySelector('.taskList')
  ReactDOM.render(elements, $tasks)
}

store.subscribe(render)

render()

var newId = 1
document.querySelector('#add-button').addEventListener('click', function(event) {
  const $inputBox = document.querySelector('#inputBox')
  if ($inputBox.value) {
    var taskId = newId
    newId += 1
    store.dispatch({ type: 'TASK_CREATED', text: $inputBox.value, id:taskId })
  }
})

document.querySelector('.taskList').addEventListener('click', function(event) {
  if (event.target.id && event.target.className === 'fa fa-check') {
    clicked = true
    $("i").click(function() {
      if(clicked){
        $(this).css('background', 'red')
        clicked  = false
      } else {
        $(this).css('background', 'white')
        clicked  = true
      }
    })
  }
  if (event.target.id && event.target.className === 'fa fa-trash') {
    console.log(event.target.id)
    store.dispatch({ type: 'TASK_DELETED', id: 1 })
  }
})
