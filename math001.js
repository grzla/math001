// The html file will ask the user for two numbers.Your program will multiply the two numbers and output the result to the webpage

// let num1 = parseInt(document.getElementById("num1").value)
// let num2 = parseInt(document.getElementById("num2").value)

let num1, num2;

let resultEl = document.getElementById("result")

multiply = (num1, num2) => {
    event.preventDefault()
    num1 = parseInt(document.getElementById("num1").value)
    num2 = parseInt(document.getElementById("num2").value)
    resultEl.innerText = num1 * num2
}