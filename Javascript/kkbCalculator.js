// John Eric Yuzon
/**
 * Variables
 **/ 
const breadValue = 749
const totalAmount = getAmount(10)
const contribution = divideTotalAmount(totalAmount)

/**
 * Main
 **/
console.log("Juan and Pedro have to contribute " + contribution +" each")

/**
 * Functions
 **/

// Get total amount
function getAmount(bread){
    return breadValue * bread
}

// Get contribution
function divideTotalAmount(amount){
    return parseFloat(amount/2).toFixed(2)
}