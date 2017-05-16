let newId = 1
function getId() {
  const taskId = newId
  newId += 1
  return taskId
}

function addTask(task) {
  const taskList = document.querySelector('#uncompleted')
  const item = document.createElement('li')
  item.textContent = task
  item.id = getId()

  const buttons = document.createElement('div')
  buttons.classList.add('buttons')

  const remove = document.createElement('button')
  remove.classList.add('remove')

  const deleteIcon = document.createElement('i')
  deleteIcon.classList.add('fa-trash')

  const complete = document.createElement('button')
  complete.classList.add('complete')

  const completeIcon = document.createElement('i')
  completeIcon.classList.add('fa-check')

  taskList.appendChild(item)
  item.appendChild(buttons)
  buttons.appendChild(remove)
  remove.appendChild(deleteIcon)
  buttons.appendChild(complete)
  complete.appendChild(completeIcon)
}

const addButton = document.querySelector('#add-task')
addButton.addEventListener('click', function() {
  let value = document.getElementById('input-box').value
  if (value) {
    addTask(value)
    document.getElementById('input-box').value = ''
  }
})

function removeTask() {
  const task = this.parentNode.parentNode
  const list = task.parentNode
  list.removeChild(task)
}
document.querySelector('.remove').addEventListener('click', removeTask)
