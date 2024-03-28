// *******************************ARRAY*******************//

const myarr=[1,2,3,4,5,6]
const myheros=["hanumaan","shaktiman"," captian america"]
// console.log(myarr[1]);
// console.log(myheros)

//Array Methods...
       
// myarr.push(7)
// console.log(myarr)
// myarr.pop()
// console.log(myarr)

// myarr.unshift(7)
// myarr.shift(7)
// console.log(myarr.includes(9))
// console.log(myarr.indexOf(3))
// console.log(myarr.indexOf(9))
// const newarr=myarr.join()

// console.log(myarr)
// console.log(newarr)

//*****SLICE/SPLICE*********//

// console.log("A" , myarr);
// const mynew1  = myarr.slice(1,3)

// console.log(mynew1)
// console.log("B(slice)" , myarr);

// const mynew2= myarr.splice(1,3)
// console.log(mynew2)
// console.log("C(splice)" , myarr);


const marvel_heros=["thor", "ironman","spiderman"]
const dc_heros=["superman","batman","flash",]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const all_heros = marvel_heros.concat(dc_heros)
// console.log( all_heros)

const all_new_heros =[...marvel_heros,...dc_heros]
// console.log(all_new_heros)

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array=another_array.flat(Infinity)

// console.log(real_another_array)
// // 
// console.log(Array.isArray("Aakash"))
// console.log(Array.from("Aakash"))
// console.log(Array.from({name:"Aakash"})) //interesting


let score1=100
let score2=200
let score3=300

// console.log(Array.of(score1,score2,score3));

//*************************Array Part2(Object)**********************

//singleton...
    // Object.create


//object literals..

const mysym = Symbol("key1")

const jsuser={
    name:"Aakash",
    "fullname":"Aakash Sharma",
    [mysym]:"mykey1",
    age:21,
    location:"chandigarh",
    email:"aakash123@gmail.com",
    isloggedin:false,
    lastlogindays:["monday","saturday"]
}

// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["fullname"])
// console.log(jsuser[mysym])

// jsuser.email="aakash234@gmail.com"
// Object.freeze(jsuser)
// jsuser.email="aakash420@gmail.com"
// console.log(jsuser)

//****************FUNCATION IN OBJECT */

jsuser.greeting=function(){
    console.log("hello js user");
}

 console.log(jsuser.greeting());
console.log(jsuser.greeting);

jsuser.greeting2=function(){
    console.log(`hello js user ${this.fullname}`);
}

console.log(jsuser.greeting2());


