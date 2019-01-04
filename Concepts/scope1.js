var num1 = 20,
    num2 = 3,
    name = "john";

//global scope
function multiply() {
    return num1 * num2;
}

console.log(multiply()); //60

//nested scope
function getScore() {
    var num1 = 2,
        num2 = 5;
    
    function add() {
        return `${name} scored ${num1 + num2}`;
    }
    return add();
}

console.log(getScore()); // john scored 7
