/*
=== Complete Variable and Function Definitions ===
*/

const customName = document.getElementById('customName')
const randomize = document.querySelector('.randomize')
const story = document.querySelector('.story')

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length)
  return array[random]
}

/*
=== Raw Text Strings ===
*/

let storyText = `It was 94 fahrenheit outside, so : insertx: went for a walk.When they got to: inserty:, they stared in horror for a few moments, then : insertz:.Bob saw the whole thing, but was not surprised — : insertx: weighs 300 pounds, and it was a hot day.`

let instertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']
const instertY = ['the soup kitchen', 'Disneyland', 'the White House']
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']

/*
=== Event Listener and Partial Function Definition ===
*/

randomize.addEventListener('click', result)


function result() {
  
  let newStory = storyText

  const xItem = randomValueFromArray(insertx)
  const yItem = randomValueFromArray(inserty)
  const zItem = randomValueFromArray(insertz)
  
  newStory = newStory.replace(':insertx:', xItem)
  newStory = newStory.replace(':insertx:', xItem)
  newStory = newStory.replace(':inserty:', yItem)
  newStory = newStory.replace(':insertz:', zItem)

  if (customName.value !== '') {
    let name = customName.value
    newStory = newStory.replace('Bob', name)
  }

  if (document.getElementById("uk").checked) {
    let weight = Math.round(300/14) + " stone"
    let temperature = Math.round((94-32)/1.8) + " centigrade"

    newStory = newStory.replace('94 fahrenheit', temperature)
    newStory = newStory.replace('300 pounds', weight)
  }

  story.textContent = ;
  story.getElementsByClassName.visibility = 'visible'
}