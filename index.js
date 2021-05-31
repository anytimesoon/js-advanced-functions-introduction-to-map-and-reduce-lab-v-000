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


function reduceToTotal(sourceArray, startingPoint = 0){
  let total = startingPoint
  sourceArray.forEach(element => total += element)
  return total
};


function reduceToAllTrue(sourceArray){
  let returnValue = true
  sourceArray.forEach(function(value){
    if (value == false){
    returnValue = false
    }
  })
  return returnValue
};


function reduceToAnyTrue(sourceArray){
    let returnValue = false
    sourceArray.forEach(function(value){
      if (value == true){
        returnValue = true
      }
    })
    return returnValue
  }