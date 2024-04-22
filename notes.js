                    //Variables Practice

// Create two variables, firstName and lastName
let firstName = "Alex"
let lastName = "Lee"
// Concatenate the two variables into a third variable called fullName
let fullName = firstName + " " + lastName
// Log fullName to the console
console.log(fullName)

                    //Concateneat two strings in a function
let name = "Linda"
let greeting = "Hi there"
// Create a function that logs out "Hi there, Linda!" when called
  //create function
function = greetLinda {
    console.log(greeting + ", " + name + "!")
}
  //call function
greetLinda();

                    //incrementing and decrementing
let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points() {
    myPoints = myPoints += 3
} 

function remove1Point() {
    myPoints = myPoints -= 1
}                   
// Call the functions to that the line below logs out 10
add3Points()
add3Points()
add3Points
remove1Point()
remove1Point()

console.log(myPoints)

               //strings and numbers
// Try to predict what each of the lines will log out
console.log("2" + 2) //22
console.log(11 + 7) //18
console.log(6 + "5") //65
console.log("My points: " + 5 + 9) //My points: 59
console.log(2 + 2) // 4
console.log("11" + "14") // 1114

            //Rendering and error message
// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

    //html add onclick id to button
eg <button onclick=""></button>

    //create function in js
function purchase() {

}
  //add function name to html onclick
  eg <button onclick="purchase"></button>

  //grab paragraph text to be rendered inside(goes to top of code)
let errorParagraph = document.getElementById("error")

  //trigger error text iside error function
errorParagraph.textContent = "Something went wrong, please try again"

  //completed js code
let errorParagraph = document.getElementById("error")

function purchase() {
    errorParagraph.textContent = "Something went wrong, please try again"
}


               //calculator challenge
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
               
    // Create four functions: add(), subtract(), divide(), multiply()
function add() {

}
function subtract() {
    
}
function divide() {
    
}
function multiply() {
    
}
    // Call the correct function when the user clicks on one of the buttons
add onclick="" to buttons in html and name them in "" eg "add"
eg eg <button onclick="add"></button>
add button ids to buttons in html so can be grabbed in JS
eg. eg eg <button id="add" onclick="add"></button>
    // Perform the given calculation using num1 and num2

    // Render the result of the calculation in the paragraph with id="sum-el"
               
    // E.g. if the user clicks on the "Plus" button, you should render
    // "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
