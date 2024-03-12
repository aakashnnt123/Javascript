
// **************************INTERGER**********************


// const score = 400
// console.log(score)
// console.log(typeof(score))

// const balance= new Number(400)
// console.log(balance);
// console.log(typeof(balance))

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const othernumber = 1123.8966
// console.log(othernumber.toPrecision(5));


// const hundreds =1000000
// console.log(hundreds.toLocaleString('en-in'));


// *************************MATHS*******************************

// console.log(Math)
// console.log(Math.abs(4));
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(-4,10,11,0));
// console.log(Math.max(-4,10,11,0));


// console.log(Math.random());
// console.log(Math.floor((Math.random()*10)+1));


// const min =10
// const max=20

// console.log(Math.floor(Math.random() * (max - min +1 )) + min)

// *****************************DATES******************************* //

// let mydate = new Date();
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())

// console.log(typeof mydate)

// let createDate = new Date(2023,0,23)
// console.log(createDate.toDateString() )
// console.log(createDate.toLocaleString())

// let mycreateDate = new Date(2023,0,23,5,3)
// console.log(mycreateDate.toLocaleString() )

// let mycreateDate1 = new Date("01-14-2023")
// console.log(mycreateDate1.toLocaleString() )

// let myTimestamp = Date.now()
// console.log(myTimestamp)
// console.log(mycreateDate1.getTime())
// console.log(Math.floor((Date.now()/1000)))

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay())
// console.log(newDate.getMonth()+1)

// console.log(`${new Date}`)

newDate.toLocalString('default',{
    weekday:"long",
})
