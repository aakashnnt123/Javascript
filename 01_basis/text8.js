// ***************************ITERATIONS/LOOPS..***********

// FOR LOOP


for (let i= 0; i <=10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number")
    }
    // console.log(element)
}


for (let i = 0; i <=10; i++) {
    for (let j = 0; j <=10; j++) {
        // console.log(i)
    }
   
}

let myarray=["flash","batman","superman"]

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
    
}

// BREAK AND CONTINUES

// for (let j = 0; j <=20; j++) {
//     if (j == 5) {
//         console.log(`detected 5`)
//         break;
//     }
//     console.log(`value of j is ${j}`)
// }


// for (let j = 0; j <=20; j++) {
//     if (j == 5) {
//         console.log(`detected 5`)
//         continue;
//     }
//     console.log(`value of j is ${j}`)
// }

// ****************************WHILE AND DO WHILE LOOP ***********************

// let index = 0;
// while (index <=10){
//     console.log(`value of index is ${index}`)
//     index = index+2;
// }

// let myArray=['flash','batman','superman','spiderman','sab ka baap hanumaan']

// let arr=0;
// while(arr < myArray.length){
//     console.log(`${myArray[arr]}`)
//     arr++;
// }

// let score=1;

// do {
//     console.log(`score is ${score}`)
//     score++;
// } while (score <=10);


// ***********************FOR OF LOOP********************
// ["","",""]
// [{},{},{}]

 const arr =[1,2,3,4,5]
 for (const val of arr) {
    // console.log(val);
 }

 const greetings ="helloworld"
 for (const greet of greetings) {
    // console.log(`each char is ${greet}`)
}

// MAPS

// const map = new Map()
// map.set('IN' ,"INDIA")
// map.set('USA' ,"UNTED STATE OF AMERICA")
// map.set('FR' ,"FRANCE")

// console.log(map)

// for (const [key,value] of map) {
//     // console.log(key,':-' , value)
// }
const myobjects={
    game1 : 'NFS',
    game2 : 'spiderman'
}

// for (const [key,value] of myobjects){
//     // console.log(key,':-' , value)
// }   object is not iterrable....
// *************************FOR IN LOOP ****************

// const myobject ={
//    JS : 'JAVASCRIPT',
//    CPP : 'C++',
//    RB : 'RUBY',
//    SWIFT : 'SWIFT BY APPLE'
// }

// for (const key in myobject) {
//   console.log(`${key} shortcut is for ${myobject[key]}`)
// }

// const programming =["js","rb","py","java","cpp"]

// for (const key in programming) {
//     console.log(programming[key])
// }



// const map = new Map()
// map.set('IN' ,"INDIA")
// map.set('USA' ,"UNTED STATE OF AMERICA")
// map.set('FR' ,"FRANCE")

// for (const key in map) {
//     console.log(key)
// }

// ***********************FOR EACH LOOP *****************

const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function (items) {
//     console.log(`${items}`)
// } )

// coding.forEach( (val) => 
// { console.log(val)})


// function printme(item){
//     console.log(item)
// }

// coding.forEach(printme)


// coding.forEach( (item , index , arr) => {
//           console.log(item,index,arr);
// })


 const mycoding = [
   {
    languagename:  "javascript",
    languagefilename:"js"
   },
   {
    languagename:"java",
    languagefilename:"java"
   },
   {
    languagename:"python",
    languagefilename:"python"
   }

]


mycoding.forEach((items) => {
    console.log(items.languagename)
})
