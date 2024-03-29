// ***************************FUNCTION***************

function saymyname(){
    console.log("Aakash Sharma")
}

// saymyname()

// function addtwonum(num1,num2){
//     num3=num1+num2;
//     console.log(num3)
  
// }
function addtwonum(num1,num2){
  let result = num1 + num2
   return result
}
const ans= addtwonum(2,5)
// console.log(ans)

function loginusermessage(username = "sam"){
    if(username == undefined){
        console.log("plz enter a user name")
        return
    }
    return `${username} just logged in`
}// console.log(loginusermessage("Aakash"))

function calculatecartprice(val1,val2){
    return  val3=val1+val2
}
// console.log(calculatecartprice(300,200))

function calculatecartprice1(...num1){
    return num1
}
// console.log(calculatecartprice1(300,200,400,200,400))

const user={
    username : "aakash",
    price : 199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleobject(user)

// handleobject({
//     username:"sam",
//     price:399
// })


const mynewarray=[200,400,600,100]

function returnsecondvalue(getArray){
    return getArray[1]
}

console.log(returnsecondvalue(mynewarray))
console.log(returnsecondvalue([200,400,600,100]))

 