const tinderuser = new Object() //(single ton object)

// const tinderuser={}
// console.log(tinderuser)


tinderuser.id ="123abc"
tinderuser.name="sammy"
tinderuser.isloggedin = false
// console.log(tinderuser)

const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"AAKASH",
            lastname:"SHARMA"
            
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}

// const obj3=Object.assign({},obj1,obj2)
// const obj3=Object.assign(obj1,obj2)
const obj3={...obj1,...obj2}

// console.log(obj3)

const users =[
{
    id:0,
    email:"some0@gmail.com",
},
{
    id:1,
    email:"some1@gmail.com",
},

{
    id:2,
    email:"some2@gmail.com",
},

{
    id:3,
    email:"some3@gmail.com",
},


]

const user=users[1].email
// console.log(user)

// console.log(tinderuser)
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isloggedin'))


const course ={
    coursensme:" js in hindi",
    price:"999",
    courseinstructor:"hitesh"
}

// console.log(course.courseinstructor)

// const {courseinstructor} = course
// console.log(courseinstructor)

const {courseinstructor:instructor} = course

console.log(instructor)







