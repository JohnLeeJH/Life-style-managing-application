var express = require('express')
var bodyParser = require('body-parser')

var tasks = [
  {
    id: 0,
    task: 'Complete the projects'
  },
  {
    id: 1000,
    task: 'Make a new Project'
  }
]
var newId = 1

function findTask(tasks, taskId) {
  var id = parseInt(taskId, 10)
  var task = tasks.find(task => {
    return task.id === id
  })
  return task
}

var app = express()
app.use(express.static('public'))
app.use(bodyParser.json())

app.post('/tasks', (req, res) => {
  var task = req.body
  task.id = newId
  newId += 1
  tasks.push(task)
  res.sendStatus(201)
})

app.get('/tasks', (req, res) => {
  res.json(tasks)
})

app.get('/tasks/:taskId', (req, res) => {
  var taskId = req.params.taskId
  var task = findTask(tasks, taskId)
  if (!task) return res.sendStatus(404)
  res.json(task)
})

app.listen(3333, () => {
  console.log('Listening on port 3333')
})

// var fetchTasks = function() {
//   let getTasks = fetch('http://localhost:3333/tasks')
//   let postTasks = getTasks.then(function(res) {
//     return res.json()
//   })
//   return postTasks
// }
//
// var fetchTaskById = function(taskId) {
//   let getTaskById = fetch('http://localhost:3333/tasks/' + taskId)
//   let postTaskById = getTaskById.then(function(res) {
//     return res.json()
//   })
//   return postTaskById
// }
