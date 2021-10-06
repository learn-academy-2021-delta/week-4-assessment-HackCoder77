// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

//create a blank array
//use .shift to remove the first item of an array
//look up a command online for shuffling elements(if it exists)
//if there is no shuffling elements command, then i will attempt to use the Math random command as a place picker
//use reverse command on array

describe('remove', () => {
    it('returns an array with the first element removed and the rest of the array shuffled', () => {
        expect(remove(colors1)).toEqual(["yellow", "blue", "pink", "green"])
        expect(remove(colors2)).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])        
    })
})


var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// b) Create the function that makes the test pass.

function remove(array) {
    let sorter = array.shift();
    array.sort(() => Math.random() - 0.5);
    return array
}

remove(colors1)


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.
//create a new blank array
//run a function that will find the lowest number and push it to an array by comparing all the numbers against each other
//run a seperate command in the function that will return the maximum number and push it to an array by comparing all the numbers against each other
//push the smallest number first and then the largest number to the array
//realized i don't need a blank array, i just put the numbers it returned into an array

describe('minMax', () => {
    it('returns an array with the minimum and maximum numbers in the array', () => {
        expect(minMax(numArray)).toEqual([-8, 90])
        expect(minMax(numArray)).toEqual([5, 109])        
    })
})

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]

var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]



// b) Create the function that makes the test pass.

function minMax(numArray){
    let lowest = 100;
    let largest = 0;
    for(i=0; i<numArray.length; i++){
    if(numArray[i] < lowest) {
        lowest = numArray[i];
    }
    for(j=0; j<numArray.length; j++){
        if(numArray[j] > largest){
            largest = numArray[j]
        }
     }
  }
  return [lowest, largest];
}
minMax(nums2)


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

//use new set to remove all duplicates of array
//return array after command to remove duplicates

describe('noDupes', () => {
    it('returns an array with all duplicates from both arrays removed', () => {
        expect(noDupes(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])      
    })
})

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// b) Create the function that makes the test pass.

function noDupes(array1, array2){
   let joined = array1.concat(array2)
   let remove = [...new Set(joined)]
   return remove
}
noDupes(testArray1, testArray2)