// let arr=[1,2,3,4,5,6,7,8,9]


// arr.forEach(function(i){
//     console.log(i);
// })

// console.log("******************************");

// arr.forEach((i)=>{
//     console.log(i);
// })

// arr.forEach((i,index,ar)=>{
//     console.log(i, index, ar);
// })

// console.log("******************************");

// function printme(i)
// {
//     console.log(i);
// }

// arr.forEach(printme)// here we have to give reference (printme) not execution (printme())


//********************************************************* */

let my=[
    {lang:'java',
    names:'java'
    },
    {lang:'javascript',
    names:'js'
    },
    {lang:'c++',
    names:'cpp'
    }
]

my.forEach((i)=>{
    console.log((i.lang));
})