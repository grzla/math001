// The html file will ask the user for two numbers.Your program will multiply the two numbers and output the result to the webpage


multiply = (num1, num2) => {
    event.preventDefault()

    console.log(typeof num1, typeof num2)
    console.log(typeof num1.value, typeof num2.value)

    let resultEl = document.getElementById("result")

    resultEl.innerText = num1.value * num2.value
}