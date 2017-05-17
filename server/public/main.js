let newId = 1
function getId() {
  const taskId = newId
  newId += 1
  return taskId
}

const addTask = task => {
  const taskList = document.querySelector('#incompleted')
  const newTask = document.createElement('li')
  newTask.textContent = task
  newTask.id = getId()

  const icons = document.createElement('div')
  icons.classList.add('icons')

  const remove = document.createElement('button')
  remove.classList.add('remove')
  remove.addEventListener('click', removeTask)

  const deleteIcon = document.createElement('i')
  deleteIcon.classList.add('fa-trash')
  deleteIcon.classList.add('fa')

  const completed = document.createElement('button')
  completed.classList.add('complete')
  completed.addEventListener('click', completedTask)

  const completeIcon = document.createElement('i')
  completeIcon.classList.add('fa-check')
  completeIcon.classList.add('fa')

  taskList.appendChild(newTask)
  newTask.appendChild(icons)
  icons.appendChild(remove)
  remove.appendChild(deleteIcon)
  icons.appendChild(completed)
  completed.appendChild(completeIcon)
}

const addButton = document.querySelector('#add-task')
addButton.addEventListener('click', function() {
  const text = document.querySelector('#input-box')
  let value = text.value
  if (value) {
    addTask(value)
    document.querySelector('#input-box').value = ''
  }
})

function completedTask() {
  const task = this.parentNode.parentNode
  const taskList = document.querySelector('#incompleted')
  const completedList = document.querySelector('#completed')
  if (this.parentNode.parentNode.parentNode.id === 'incompleted') {
    taskList.removeChild(task)
    completedList.appendChild(task)
  }
  else {
    completedList.removeChild(task)
    taskList.appendChild(task)
  }
}

function removeTask() {
  const task = this.parentNode.parentNode
  const taskList = task.parentNode
  taskList.removeChild(task)
}
