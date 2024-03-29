//   *********IF STATEMENT******************

// if(true){

// }

const isuserloggesin = true

if(isuserloggesin){
     
}

// < , > , <= , >= , == , != , === , !==

// difference between == and === ........

// if(2 == "2") {
//     console.log("executed");
// }
// else {
//     console.log("not executed")
// }

// if(2 === "2") {
//     console.log("executed");
// }
// else {
//     console.log("not executed")
// }


const temperature = 41 

// if(temperature < 50){
//     console.log("less than 50")
// }
// else{
//     console.log("greater than 50")
// }

const score = 200 
// if(score > 100){
//     const power = "fly"
//     console.log(`user power : ${power}`)
// }

// short hand notation........

const balance = 1000

// if(balance > 500) console.log("test"),console.log("test2");

// if(balance < 500){
//     console.log("less than");
// }
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 750");
// }
// else {
//     console.log("less than 1200")
// }


const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true 

// if(userloggedin && debitcard) 
// {
//     console.log("allow to buy course");
// }

// if(loggedinfromgoogle || loggedinfromemail)
// {
//     console.log("user logged in ")
// }


// ***************************SWITICH CASE**************

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3

// switch(month){
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;
//     case 5:
//         console.log("may");
//         break;
//     case 6:
//         console.log("june");
//         break;

//     default:
//         console.log("output not match")
//         break;
        
//     }

// TRUTHY AND FALSY VALUE

const useremail = "aa@aakash.ai"

// if(useremail){
//     console.log("got user email");
// }
// else{
//     console.log("don't have user email")
// }

// FALSY values=(false , 0 ,-0 , bigint 0n , empty string(""), null , undefined , NaN )
// TRUTHY value =("0",'false',space in empty string(" "), empty array[],empty object{},empty function(function(){})


// HOW TO CHECK EMPTY ARRAY AND OBJECT.............

const myarray=[]

// if(myarray.length===0)
// {
//     console.log("array is empty")
// }
const myobject={}

// if(Object.keys(myobject).length ===0){
//     console.log("object is empty ")
// }


//  NULLISH COALESCING OPERATOR(??): NULL UNDEFINED

let val1
// val1 = 5??10
// val1=null??10

// val1 = undefined ?? 15

val1=null??10??15

console.log(val1)

// TERNIARY OPERATOR

// condition ? true : false

const iceteaprice = 100
iceteaprice <= 80 ? console.log("less than 80 "): console.log("more than 80")