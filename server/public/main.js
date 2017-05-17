
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

function getId() {
  let newId = 1
  const taskId = newId
  newId += 1
  return taskId
}

const taskManager = task => {
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

const addTask = document.querySelector('#add-task')
addTask.addEventListener('click', function() {
  const text = document.querySelector('#input-box')
  let value = text.value
  if (value) {
    taskManager(value)
    document.querySelector('#input-box').value = ''
  }
})

function writeJournal() {
  var journalPage = document.getElementById('journal-page')

  var journalFrame = document.createElement('div')

  var journalTitle = document.createElement('input')
  journalTitle.setAttribute('id', 'journal-title')
  journalTitle.setAttribute('type', 'text')
  journalTitle.setAttribute('placeholder', 'Title')

  var journalDate = document.createElement('input')
  journalDate.setAttribute('id', 'journal-date')
  journalDate.setAttribute('type', 'text')
  journalDate.setAttribute('placeholder', 'Date')

  var journalForm = document.createElement('textarea')
  journalForm.setAttribute('id', 'journal-form')
  journalForm.setAttribute('placeholder', 'Write Journal')

  var journalSave = document.createElement('button')
  journalSave.setAttribute('id', 'journal-save')
  journalSave.setAttribute('type', 'button')
  journalSave.classList.add('btn')
  journalSave.classList.add('btn-secondary')
  journalSave.classList.add('btn-lg')
  journalSave.classList.add('btn-block')
  journalSave.textContent = 'Save Journal'

  journalPage.appendChild(journalFrame)
  journalFrame.appendChild(journalTitle)
  journalFrame.appendChild(journalDate)
  journalFrame.appendChild(journalForm)
  journalFrame.appendChild(journalSave)
}

writeJournal()
