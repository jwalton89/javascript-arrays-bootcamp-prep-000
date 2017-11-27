var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var element = "M&Ms"
var array = chocolateBars

function addElementToBeginningOfArray(array,element) {
  return [element,...array]
}

function addElementToEndOfArray(array,element) {
  return chocolateBars.push(element)
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  return chocolateBars.unshift(element)
}
