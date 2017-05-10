const Redux = require('redux')
const React = require('react')
const ReactDOM = require('react-dom')

function textInput(state=[{id: 0, text: 'Complete project'}], action) {
  switch (action.type) {
    case 'TASK_CREATED' :
      return state.concat({text:action.text, id:action.id})
    default:
      return state
  }
}

const store = Redux.createStore(textInput)

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
          <li key={i}>
            <span id={ task.id }>{ task.text }</span>
            <div className="buttons">
              <button className="removed"><i className="fa fa-trash-o"></i></button>
              <button className="completed"><i className="fa fa-check"></i></button>
            </div>
          </li>
        )
      })}
    </div>
  )
}

const render = () => {
  const tasks = store.getState()
  const elements = React.createElement(taskList, tasks)
  const $tasks = document.querySelector('.taskList')
  ReactDOM.render(elements, $tasks)
}

store.subscribe(render)

render()

document.querySelector('#add-button').addEventListener('click', function(event) {
  console.log(event)
  const $inputBox = document.querySelector('#inputBox')
  store.dispatch({ type: 'TASK_CREATED', text: $inputBox.value, id: taskId + 1})
})

// const removeTask = document.querySelector('.removed')
// removeTask.addEventListener('click', function(event) {
//   if(removeTask.index === event.index) {
//     console.log('hi')
//   }
// })
