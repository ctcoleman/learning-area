/*
=== Complete Variable and Function Definitions ===

const customName = document.getElementById('customName')
const randomize = document.querySelector('.randomize')
const story = document.querySelector('.story')

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length)
  return array[random]
}