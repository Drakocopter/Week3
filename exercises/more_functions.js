function displayMailingLabel(name, address, city, state, zip){
    console.log(name);
    console.log(address);
    console.log(city + ", " + state + " " + zip)
}
displayMailingLabel("Yish", "1649 Westwind Way", "McLean", "Virgiia", "22102")

function addNumbers(num1, num2){
    console.log(num1 + num2)
}

addNumbers(5,4)

function addNumbers(num1, num2){
    return (num1 + num2);
}

console.log (5+5)

function function_one() {
    function_two(); // considering the next alert, I figured you wanted to call function_two first
    console.log ("The function called 'function_one' has been called.");
    }
    
    function function_two() {
    console.log ("The function called 'function_two' has been called.");
    }
    
    function_one();