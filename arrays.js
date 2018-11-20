var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
var array1 = []

function addElementToBeginningOfArray( array1, element ) {
  [element,...array1]
 
 return array1
}

function destructivelyAddElementToBeginningOfArray( array, element ) {
  [element,...array]
 
 return array
}

