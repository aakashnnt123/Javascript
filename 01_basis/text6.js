// *****************************GLOBAL AND LOCAL VARIABLE ************

function one() {
    const username = "Aakash Sharma"
    console.log(username)
    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);

    // two()
}
// one()

if (true) {
    const username = "Aakash"
    if (username === "Aakash") {
        const website = "youtube";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username)

// +++++++++++++++=INTERSTING+++++++++++++++++

// console.log(addone(5))

function addone(num) {
    return num + 1;

}

// console.log(addtwo(6))
const addtwo = function (num) {
    return num + 2
}



// ++++++++++++++++++++++++++ ARROW FUNCTION ++++++++++++++++++++++++++

const user = {
    username: "Aakash",
    price: 999,
    welcomemessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()

// console.log(this)

function chai(){
    let username="aakash"
    console.log(this);
}
// chai()


function js() {
    let username = "Aakash"
    console.log(this)
    console.log(this.username)
}
// js() 

// const self = function(){
//     let username="Aakash"
//     console.log(this.username)
// }
// self()

const self = () => { 
    let username="Aakash"
    console.log(this)
}
// self()


// const addTwo = (num1,num2) => {
//       return num1 + num2 
// }                                       // (BASIC ARROR FUNCTION/explicit return)
// console.log(addTwo(3,7))



// const addTwo = (num1,num2) =>  num1 + num2 

// console.log(addTwo(3,7))              //(implicit return array funcation)

// const addTwo = (num1,num2) => (num1 + num2)

// console.log(addTwo(3,7))

// const addTwo = (num1,num2) => ({username:"Aakash"})

// console.log(addTwo(3,7))

// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)

(function sher() {
    // named IIFE
    console.log("sheree..............")
})();

((name) => {
    // unnamed IIFE
    console.log(`chitaa hi kha da...${name}`)
})("Aakash");
