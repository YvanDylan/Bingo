console.log("Hello Pogi!")

let B = false, 
I = false, 
N = false, 
G = false, 
O = false;

let BNumber, INumber, NNumber, GNumber, ONumber ;

function newNumber(maxNumber) {
   let x = Math.floor (Math.random()* maxNumber)+ 1;
   let b = Math.floor (Math.random() * 15) + 1;
   let i = Math.floor (Math.random() * 16) + 15;
   let n = Math.floor (Math.random() * 30) + 30;
   let g = Math.floor (Math.random() * 60) + 60;
   let o = Math.floor (Math.random() * 61) + 61;
    // if ... esle if ... esle statement
   // conditional operator:
   // GTE > =, LTE < =, EQ ==, NEQ ! =, AND &&, OR ||


    if (x <= 15){
        console.log('New number belongs to "B"');
        B = true;
        BNumber = x;  
        document.querySelector("#td1").textContent = x;
        document.querySelector("#td6").textContent = b;
        document.querySelector("#td11").textContent = b;
        document.querySelector("#td16").textContent = b;
        document.querySelector("#td21").textContent = b;
    } else if (x >= 16 && x <= 30) {
        console.log('New number belongs to "I"');
        I = true;
        INumber = x;
        document.querySelector("#td2").textContent = x;
        document.querySelector("#td7").textContent = i;
        document.querySelector("#td12").textContent = i;
        document.querySelector("#td17").textContent = i;
        document.querySelector("#td22").textContent = i;
    } else if (x >= 31 && x <= 45) {
        console.log('New number belongs to "N"');
        N = true;
        NNumber = x;
        document.querySelector("#td3").textContent = x;
        document.querySelector("#td8").textContent = n;
        document.querySelector("#td13").textContent = n;
        document.querySelector("#td18").textContent = n;
        document.querySelector("#td23").textContent = n;
    
    } else if (x >= 46 && x <= 60) {
        console.log('New number belongs to "G"');
        G = true;
        GNumber = x;
        document.querySelector("#td4").textContent = x;
        document.querySelector("#td4").textContent = g;
        document.querySelector("#td4").textContent = g;
        document.querySelector("#td4").textContent = g;
        document.querySelector("#td4").textContent = g;
       
    } else if (x >= 61 && x <= 75) {
        console.log('New number belongs to "O"');
        O = true;
        ONumber = x;
        document.querySelector("#td5").textContent = x;
        document.querySelector("#td5").textContent = o;
        document.querySelector("#td5").textContent = o;
        document.querySelector("#td5").textContent = o;
        document.querySelector("#td5").textContent = o;
        
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