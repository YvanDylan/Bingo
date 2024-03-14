console.log("Hello World!");

generateNumber(45);


function generateNumber(max) {

    let randomNumber = Math.floor(Math.random() * max) + 1;

    if (randomNumber <= 15) {
        console.log("The number is in B.");
    } else if (randomNumber >= 16 && randomNumber <= 30) {
        console.log("Then number is in I.")
    } else {
        console.log("The number is invalid!")
    }

    return console.log(randomNumber);

}