// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver() {
  drivers.push('Ralph')
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
   var newArray = drivers.slice()
  newArray.push(name)
  return newArray
}

function prependDriver(name) {
  var newArray = drivers.slice()
  newArray.pop(name)
  return newArray
}



