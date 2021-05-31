// Your code here

function mapToNegativize(sourceArray){
  let newArray = []
  sourceArray.forEach(element => newArray.push(-1 * element))
  return newArray
};


function mapToNoChange(sourceArray){
  return sourceArray
};


function mapToDouble(sourceArray){
  let newArray = []
  sourceArray.forEach(element => newArray.push(element * 2))
  return newArray
};


function mapToSquare(sourceArray){
  let newArray = []
  sourceArray.forEach(element => newArray.push(element * element))
  return newArray
};

// my own reduce-like methods
// reduceToTotal returns a running total when not given a starting point
// reduceToTotal returns a running total when given a starting point

function reduceToTotal(sourceArray, startingPoint = 0){
  let total = startingPoint
  sourceArray.forEach(element => total += element)
  return total
};

// reduceToAllTrue returns true when all values are truthy
// reduceToAllTrue returns false when any value is falsy

function reduceToAllTrue(sourceArray){
  let returnValue = true
  sourceArray.forEach(function(value){
    if (value == false){
    returnValue = false
    }
  })
  return returnValue
};

// reduceToAnyTrue returns false when no true value is present
// reduceToAnyTrue returns true when a true value is present

function reduceToAnyTrue(sourceArray){
    let returnValue = false
    sourceArray.forEach(function(value){
      if (value == true){
        returnValue = true
      }
    })
    return returnValue
  }