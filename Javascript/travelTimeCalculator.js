// John Eric Yuzon

const averageSpeed = 5;
let distance = prompt("Please enter a distance in kilometers ")
const speed = (distance,averageSpeed) => {return distance/averageSpeed};
 
console.log("Estimated time of travel: " + speed(distance,averageSpeed) + " hours");