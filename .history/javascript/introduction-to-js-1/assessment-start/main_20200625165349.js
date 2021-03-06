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

let storyText = `It was 94 fahrenheit outside, so ${insertx}: went for a walk. When they got to ${inserty}, they stared in horror for a few moments, then ${insertz}. Bob saw the whole thing, but was not surprised — ${insertx} weighs 300 pounds, and it was a hot day.`

const instertx = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']
const insterty = ['the soup kitchen', 'Disneyland', 'the White House']
const insertz = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']

/*
=== Event Listener and Partial Function Definition ===
*/

randomize.addEventListener('click', result)

let newStory = storyText
const xItem = randomValueFromArray() yItem, zItem
function result() {
  if (customName.value !== '') {
    let name = customName.value
  }

  if (document.getElementById("uk").checked) {
    let weight = Math.round(300)
    let temperature = Math.round(94)
  }

  story.textContent = ;
  story.getElementsByClassName.visibility = 'visible'
}