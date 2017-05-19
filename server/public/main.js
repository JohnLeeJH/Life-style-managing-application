// main page
function menuHome() {
  const mainPage = document.getElementById('main-page')
  const headLine = document.createElement('h1')
  headLine.textContent = 'DAY | RUNNER'
  const message = document.createElement('h2')
  message.textContent = 'The key to time management is to see the value of every moment.'

  mainPage.appendChild(headLine)
  mainPage.appendChild(message)
  return mainPage
}
menuHome()

// task manager feature
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

const taskManager = task => {
  const taskList = document.querySelector('#incompleted')
  const newTask = document.createElement('li')
  newTask.textContent = task
  taskList.appendChild(newTask)

  const icons = document.createElement('div')
  icons.classList.add('icons')
  newTask.appendChild(icons)

  const remove = document.createElement('button')
  remove.classList.add('remove')
  remove.addEventListener('click', removeTask)
  icons.appendChild(remove)

  const deleteIcon = document.createElement('i')
  deleteIcon.classList.add('fa-trash')
  deleteIcon.classList.add('fa')
  remove.appendChild(deleteIcon)

  const completed = document.createElement('button')
  completed.classList.add('complete')
  completed.addEventListener('click', completedTask)
  icons.appendChild(completed)

  const completeIcon = document.createElement('i')
  completeIcon.classList.add('fa-check')
  completeIcon.classList.add('fa')
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
// journal feature
function writeJournal() {
  const journalPage = document.getElementById('journal-page')
  const date = document.createElement('p')
  date.textContent = new Date().toDateString()
  date.classList.add('date')
  journalPage.appendChild(date)

  const journalFrame = document.createElement('div')

  const journalForm = document.createElement('textarea')
  journalForm.setAttribute('id', 'journal-form')
  journalForm.setAttribute('placeholder', 'Write Journal')

  const journalSave = document.createElement('button')
  journalSave.setAttribute('id', 'journal-save')
  journalSave.setAttribute('type', 'button')
  journalSave.classList.add('btn')
  journalSave.classList.add('btn-secondary')
  journalSave.classList.add('btn-lg')
  journalSave.classList.add('btn-block')
  journalSave.textContent = 'Save Journal'

  journalPage.appendChild(journalFrame)
  journalFrame.appendChild(journalForm)
  journalFrame.appendChild(journalSave)
}
writeJournal()

document.getElementById('features').addEventListener('click', function(event) {
  const mainPage = document.getElementById('main-page')
  const taskFeature = document.getElementById('task-manager')
  const journalFeature = document.getElementById('journal-page')
  const recipesFeature = document.getElementById('recipes')
  if (event.target.id === 'landing-page') {
    mainPage.classList.remove('hidden')
    taskFeature.classList.add('hidden')
    journalFeature.classList.add('hidden')
    recipesFeature.classList.add('hidden')
  }
  else if (event.target.id === 'task-feature') {
    taskFeature.classList.remove('hidden')
    journalFeature.classList.add('hidden')
    mainPage.classList.add('hidden')
    recipesFeature.classList.add('hidden')
  }
  else if (event.target.id === 'journal-feature') {
    journalFeature.classList.remove('hidden')
    taskFeature.classList.add('hidden')
    mainPage.classList.add('hidden')
    recipesFeature.classList.add('hidden')
  }
  else if (event.target.id === 'recipes-feature') {
    recipesFeature.classList.remove('hidden')
    journalFeature.classList.add('hidden')
    taskFeature.classList.add('hidden')
    mainPage.classList.add('hidden')
  }
})
// recipe feature
let recipes = [
  {
    id: 1,
    name: 'GRILLED STRIP ROAST',
    recipeBy: 'Recipe by Porter Road Butcher in Nashville, Tennessee',
    description: 'This roast is prepared using a technique called grill roasting: the meat is cooked on an outdoor grill over indirect heat, producing beef with an enticing smoky flavor.',
    servingSize: '8 servings',
    ingredient: ['3 pounds butternut squash', 'Oil as needed', 'Salt and pepper to taste', '4-5 pound strip roast', '3 tablespoons cider vinegar', '2 large egg yolks'],
    cookingDirections: ['Make the squash: Light a Big Green Egg or large grill to a medium flame. Peel squash and slice into 1-inch thick rounds. Coat rounds in oil and season with salt and pepper. Place rounds on grill and cover. Turn occasionally and cook until rounds are soft to the touch, about 6 minutes per side.', 'Make the roast: Season roast with salt and pepper. Place roast on grill grates and cook for about 20 to 35 minutes, turning as needed and closing lid between turns. Cook until internal temperature reaches 119 degrees. Remove from grill and let rest for 15 minutes for medium rare.', 'Make the béarnaise: In large saucepan over low heat add vinegar and tarragon. Cook for 5 minutes. Remove from heat and let cool to room temperature. Make a double boiler by heating a medium-sized pot fi lled halfway with water over low heat and placing a large bowl over top, making sure the bowl does not touch the water. In bowl of double boiler combine egg yolks and vinegar and whisk.'],
    image: 'images/stript-roast.jpg',
    alt: 'Stript Roast'
  },
  {
    id: 2,
    name: 'CREAMY BROCCOLI SOUP',
    recipeBy: 'Recipe Kecia Johndrow of Tiny Pies in Austin, Texas',
    description: 'Small pieces of broccoli cooked and combined into a cream base makes this soup a filling and enjoyable addition to a lunch of dinner menu. Made with milk, broccoli, flavorings, and spices, Cream of Broccoli Soup can also be used as a base for chicken and rice casseroles.',
    servingSize: '6 servings',
    ingredient: ['1 medium yellow onion', '2 pounds broccoli', '8 tablespoons butter', '1/4 teaspoon ground thyme', '1/2 cup flour', '2 quarts chicken stock, slightly warmed', 'Salt to taste'],
    cookingDirections: ['Peel onion and finely chop. Chop broccoli florets from stems. Peel broccoli stems with vegetable peeler and finely chop stems.', 'In large stock pot, heat butter over medium-low heat. Add onion and thyme. Cook until onions are translucent, about 5 minutes. Add flour to make roux, whisking until well-combined. Continue to whisk until color slightly deepens, about 5-8 minutes. Pour chicken stock into pot, whisking constantly, until all is smooth. Bring liquid to simmer over low heat and cook for 20 minutes, whisking occasionally. Add broccoli florets and stems to pot and stir. Continue to cook for an additional 10-15 minutes, until broccoli is very tender. Remove pot from heat.', 'Blend soup in blender or with immersion blender until smooth. Note: Do not fill blender more than halfway and be careful removing lid. Strain through sieve to remove any small remaining lumps. Return soup to stove to rewarm. Season to taste.'],
    image: 'images/broccoli-soup.jpg',
    alt: 'Broccoli Soup'
  },
  {
    id: 3,
    name: 'SUNNY BREAKFAST CASSEROLE',
    recipeBy: 'Recipe by C  hef Lauren Utvich in Los Angeles, California',
    description: 'The Sunny Skillet Breakfast can easily be altered to fit the tastes of your crowd. Try mixing in some of your favorite veggies or breakfast meats.',
    servingSize: '4 servings',
    ingredient: ['1 pound fingerling or other small potatoes', '4 ounces slab bacon cut into ¼-inch matchsticks', '2 tablespoons unsalted butter', '2 tablespoons flour', '1 cup whole milk', 'Salt and pepper to taste', '4 eggs'],
    cookingDirections: ['Preheat oven to 375 degrees. Cook potatoes by placing them in a pot of cold, heavily-salted water and bringing to a boil. Reduce heat to simmer and cook through. Drain potatoes and, when cool enough to handle, slice lengthwise', 'Add slab bacon to a cold pan and render over medium-low heat. Once crispy, remove bacon and drain on a paper towel-lined plate.', 'Melt butter in a saucepan over medium heat. Add flour, whisking constantly, and cook for about 3 minutes. Continue to whisk, add milk, and bring to boil. Reduce heat and add half of gruyère to sauce and stir. Season with salt, pepper, and nutmeg.', 'In a shallow baking dish or ovenproof skillet, gently combine potatoes, bacon, chives, and cheese sauce, then top with remaining gruyère. Bake for 30 minutes, or until cheese begins to brown. Remove casserole from oven and crack eggs over it. Return to oven and bake until eggs have reached desired doneness'],
    image: 'images/casserole.jpg',
    alt: 'Casserole'
  },
  {
    id: 4,
    name: 'PECORINO FAVA SALAD RECIPE',
    recipeBy: 'Recipe by Chef Jonathan Boncek in Portland, Oregon',
    description: 'Combine the fava beans in a large bowl with the onions, escarole, and the pecorino (reserve a couple shavings for garnish). Add some red wine vinegar, some olive oil and salt, to taste. Toss to coat the salad with the dressing. Arrange the salad on serving plates and top with the reserved shaved cheese.',
    servingSize: '4 servings',
    ingredient: ['6 ounces Pecorino Toscano or Fiore Sardo cheese', '1 pound fava beans removed from their pods', '⅓ cup high quality extra virgin olive oil ', 'Sea salt and fresh ground black pepper', '1 loaf bread'],
    cookingDirections: ['Reak pecorino into small pieces into a bowl with shelled fava beans.', 'Drizzle extra virgin olive oil over favas and cheese and season to taste with salt and pepper. Gently toss salad, then divide among plates. Serve with good bread.'],
    image: 'images/fava-salad.jpg',
    alt: 'Fava Salad'
  }
]

const newRecipesDirections = document.getElementById('recipes-directions')
const newRecipesUpdates = document.getElementById('recipes-updates')

function findItem(matchId) {
  for (let i = 0; i < recipes.length; i++) {
    const current = recipes[i]
    if (current.id.toString() === matchId) {
      return current
    }
  }
}

function weeklyUpdate(recipes) {
  const newRecipes = document.createElement('div')
  newRecipes.classList.add('container')
  newRecipes.classList.add('new-recipes')

  const recipeUpdates = document.createElement('div')
  recipeUpdates.classList.add('row')
  recipeUpdates.classList.add('new-recipes')
  newRecipes.appendChild(recipeUpdates)

  const placeImage = document.createElement('div')
  placeImage.classList.add('col-md-5')
  recipeUpdates.appendChild(placeImage)

  const recipeImage = document.createElement('img')
  recipeImage.classList.add('new-images')
  recipeImage.setAttribute('src', recipes.image)
  recipeImage.setAttribute('alt', recipes.alt)
  placeImage.appendChild(recipeImage)

  const recipeContents = document.createElement('div')
  recipeContents.classList.add('col-md-7')
  recipeContents.classList.add('new-disc')
  recipeUpdates.appendChild(recipeContents)

  const recipeName = document.createElement('h4')
  recipeName.textContent = recipes.name
  recipeContents.appendChild(recipeName)

  const recipesBy = document.createElement('h5')
  recipesBy.textContent = recipes.recipeBy
  recipeContents.appendChild(recipesBy)

  const recipeIntro = document.createElement('p')
  recipeIntro.textContent = recipes.description
  recipeContents.appendChild(recipeIntro)

  const recipeView = document.createElement('input')
  recipeView.setAttribute('class', 'button-design')
  recipeView.setAttribute('type', 'button')
  recipeView.setAttribute('value', 'Show Cooking Directions')
  recipeView.setAttribute('id', recipes.id)
  recipeUpdates.appendChild(recipeView)

  return newRecipes
}

recipes.forEach(function (recipe) {
  var $post = weeklyUpdate(recipe)
  newRecipesUpdates.appendChild($post)
})

function cookingDirection(recipe) {
  const recipeDirections = document.createElement('div')
  recipeDirections.classList.add('container')
  recipeDirections.classList.add('new-recipes')

  const recipeTitle = document.createElement('div')
  recipeTitle.classList.add('row')
  recipeTitle.classList.add('new-recipes')
  recipeDirections.appendChild(recipeTitle)

  const descriptionDetails = document.createElement('div')
  descriptionDetails.classList.add('col-md-12')
  descriptionDetails.classList.add('new-disc')
  recipeTitle.appendChild(descriptionDetails)

  const directionsName = document.createElement('h4')
  directionsName.classList.add('new-disc')
  directionsName.textContent = recipe.name
  descriptionDetails.appendChild(directionsName)

  const recipeTitleBy = document.createElement('h5')
  recipeTitleBy.textContent = recipe.recipeBy
  descriptionDetails.appendChild(recipeTitleBy)

  const recipeIngredient = document.createElement('div')
  recipeIngredient.classList.add('row')
  recipeIngredient.classList.add('new-recipes')
  recipeDirections.appendChild(recipeIngredient)

  const directionsImage = document.createElement('div')
  directionsImage.classList.add('col-md-5')
  recipeIngredient.appendChild(directionsImage)

  const ingredientImage = document.createElement('img')
  ingredientImage.classList.add('new-images')
  ingredientImage.setAttribute('src', recipe.image)
  ingredientImage.setAttribute('alt', recipe.alt)
  directionsImage.appendChild(ingredientImage)

  const directionsIngredient = document.createElement('div')
  directionsIngredient.classList.add('col-md-7')
  recipeIngredient.appendChild(directionsIngredient)

  const ingredientTitle = document.createElement('h4')
  ingredientTitle.textContent = 'Ingredients'
  directionsIngredient.appendChild(ingredientTitle)

  const ingredientList = document.createElement('ul')
  for (let i = 0; i < recipe.ingredient.length; i++) {
    const ingredients = document.createElement('li')
    ingredients.textContent = recipe.ingredient[i]
    ingredientList.appendChild(ingredients)
  }
  directionsIngredient.appendChild(ingredientList)

  const cookingDirections = document.createElement('div')
  cookingDirections.classList.add('row')
  cookingDirections.classList.add('new-recipes')
  recipeDirections.appendChild(cookingDirections)

  const directionsSteps = document.createElement('div')
  directionsSteps.classList.add('col-md-12')
  cookingDirections.appendChild(directionsSteps)

  const directionsTitle = document.createElement('h4')
  directionsTitle.textContent = 'Cooking Directions'
  directionsSteps.appendChild(directionsTitle)

  const recipesCookingSteps = document.createElement('ol')
  for (let z = 0; z < recipe.cookingDirections.length; z++) {
    const cookingSteps = document.createElement('li')
    cookingSteps.textContent = recipe.cookingDirections[z]
    recipesCookingSteps.appendChild(cookingSteps)
  }
  directionsSteps.appendChild(recipesCookingSteps)

  const closeDirections = document.createElement('input')
  closeDirections.classList.add('button-design')
  closeDirections.setAttribute('type', 'button')
  closeDirections.setAttribute('value', 'Enjoy Cooking!')
  closeDirections.setAttribute('id', recipe.id)
  recipeDirections.appendChild(closeDirections)

  return recipeDirections
}

newRecipesUpdates.addEventListener('click', function (event) {
  if (event.target.tagName === 'INPUT') {
    const recipeId = event.target.id
    const recipeDetails = findItem(recipeId)
    const seeDirection = cookingDirection(recipeDetails)
    newRecipesDirections.innerHTML = ''
    newRecipesDirections.appendChild(seeDirection)
    newRecipesUpdates.classList.add('hidden')
    newRecipesDirections.classList.remove('hidden')
  }
})

const recipeDetails = document.getElementById('recipes-directions')
recipeDetails.addEventListener('click', function (event) {
  if (event.target.tagName === 'INPUT') {
    newRecipesUpdates.classList.remove('hidden')
    newRecipesDirections.classList.add('hidden')
  }
})
