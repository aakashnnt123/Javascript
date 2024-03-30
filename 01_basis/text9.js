const coding = ["JS","RUBY","JAVA","PYTHON","CPP"]

const values = coding.forEach((item) => {
    // console.log(item); 
})

// console.log(values);

const myNums =[1,2,3,4,5,6,7,8,9]

// const newnums = myNums.filter( (num) => {
//     return num>4})
// console.log(newnums)


const newnums = []
 myNums.forEach((num) => {
    if(num>4){
        newnums.push(num)
    }
 } )

//  console.log(newnums)

//  const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')

//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })
//   console.log(userBooks);

const mynumbers =[1,2,3,4,5,6,7,8,9,10]

// const newnum = mynumbers.map( (num) => {
//     return num +10 
// })
// console.log(newnum)

const newnumes = mynumbers
.map( (num) => num * 10)
.map((num)=> num +1)
.filter((num) => num >=40)

// console.log(newnumes)

// **********REDUCE*******

const mynum = [ 1,2,3]

// const mytotal = mynum.reduce(function(acc , currval){
//     console.log(`acc:${acc} and currval:${currval} `);
//     return acc + currval
// },0)
// console.log(mytotal)

const mytotal = mynum.reduce((acc , currval) => acc+currval , 0)

// console.log(mytotal)

const shoppingcart =[
    {
        itemsname: "js",
        price:2999
    },
    {
        itemsname: "python",
        price:999
    },
    {
        itemsname: "MAD",
        price:5999
    },
    {
        itemsname: "DSA",
        price:3999
    }
]

const totalbill = shoppingcart.reduce((acc , items) => acc+items.price,0)
console.log(totalbill)