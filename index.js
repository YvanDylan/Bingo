console.log("Hello Pogi!")

let B = false, 
    I = false, 
    N = false, 
    G = false, 
    O = false;

let BNumber, INumber, NNumber, GNumber, ONumber ;
let BNumber1, INumber1, NNumber1, GNumber1, ONumber1 ;
let BNumber2, INumber2, NNumber2, GNumber2, ONumber2 ;
let BNumber3, INumber3, NNumber3, GNumber3, ONumber3 ;
let BNumber4, INumber4, NNumber4, GNumber4, ONumber4 ;

function newNumber(maxNumber) {
   let x = Math.floor (Math.random()* maxNumber)+ 1;
   let b = Math.floor (Math.random()* maxNumber)+ 1;
   let i = Math.floor (Math.random()* maxNumber)+ 1;
   let n = Math.floor (Math.random()* maxNumber)+ 1;
   let g = Math.floor (Math.random()* maxNumber)+ 1;
   
   
    // if ... esle if ... esle statement
   // conditional operator:
   // GTE > =, LTE < =, EQ ==, NEQ ! =, AND &&, OR ||


    if (x <= 15){
        console.log('New number ${x} belongs to "B"');
        B = true;
        BNumber = x;   
        document.querySelector("#td1").textContent = x;
        document.querySelector("#td6").textContent = x;
        document.querySelector("#td11").textContent = x;
        document.querySelector("#td16").textContent = x;
        document.querySelector("#td21").textContent = x;
    } else if (x >= 16 && x <= 30) {
        console.log('New number ${x} belongs to "I"');
        I = true;
        INumber = b;
        document.querySelector("#td2").textContent = b;
        document.querySelector("#td7").textContent = b;
        document.querySelector("#td12").textContent = b;
        document.querySelector("#td17").textContent = b;
        document.querySelector("#td22").textContent = b;
    } else if (x >= 31 && x <= 45) {
        console.log('New number ${x} belongs to "N"');
        N = true;
        NNumber = i;
        document.querySelector("#td3").textContent = i;
        document.querySelector("#td8").textContent = i;
        document.querySelector("#td13").textContent = i;
        document.querySelector("#td18").textContent = i;
        document.querySelector("#td23").textContent = i;
    
    } else if (x >= 46 && x <= 60) {
        console.log('New number ${x} belongs to "G"');
        G = true;
        GNumber = n;
        document.querySelector("#td4").textContent = n;
        document.querySelector("#td9").textContent = n;
        document.querySelector("#td14").textContent = n;
        document.querySelector("#td19").textContent = n;
        document.querySelector("#td24").textContent = n;
       
    } else if (x >= 61 && x <= 75) {
        console.log('New number ${x} belongs to "O"');
        O = true;
        ONumber = g;
        document.querySelector("#td5").textContent = g;
        document.querySelector("#td10").textContent = g;
        document.querySelector("#td15").textContent = g;
        document.querySelector("#td20").textContent = g;
        document.querySelector("#td25").textContent = g;
        
    } else {
        console.log('New number ${x} is invalid.');
    }
 
    if (B == true && I == true && N == true && G == true && O == true) {
        console.log('BINGOOOO!');
        console.table({
            B: BNumber,
            I: INumber,
            N: NNumber,
            G: GNumber,
            O: ONumber,
        })
    }
   return console.log(x);
}

// newNumber(75);

// LOOPS
let counter = 5;
// for( counter; counter >= 0; counter--){
//   console.log(Current counter is ${counter});
//    if (counter == 2) break;

//    newNumber(75);
//    counter--;
// }

// while(counter >= 0){
//    console.log(Current counter is ${counter});
//    if (counter == 2) break;
//    counter--;
// }

 while (B == false || I == false || N == false || G == false || O == false) {
    newNumber(75);
    
}