//date
let mydate= new Date()
// console.log(mydate)
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toString())


mydate= new Date(2023,1,23)
console.log(mydate.toDateString())
mydate= new Date(2023,1,23,5,6)
console.log(mydate.toDateString())

/*
mydate.gettime()-> in milisecond
math.floor(mydate/1000)-> give it date in second from 1/1/1970

both above method are used to compare time in project


*/