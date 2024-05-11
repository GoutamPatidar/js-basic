// function saymyname(names)
// {
//     console.log(`${names}`)
// }

// saymyname("h")
// saymyname("o")
// saymyname("u")
// saymyname("t")


// function add(num,num2)
// {
//     console.log(`Addition of numbers are ${num+num2}`)
//     return num+num2
// }

// let a=add(4,5)
// console.log(a);
// add(4.2,5.55)

// function loginuser(username)
// {
//     if(username!== undefined){
//     return `${username} just login`
//     }
//     else
//     {
//         console.log("enter username");
//     return;
//     }
// }

// console.log(loginuser("goutam"))
// console.log(loginuser())// undefined is due to return

//***************************************************************************


// function calculatecart(num1,num2,...num){// this is called spread ->means can take many input arguments
//     return num//give array 
// }

// console.log(calculatecart(100,200,300,400,2000))


//object

// const user={
//     username:"hitesh",
//     price:199
// }

// function handleobj(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);
// }

// handleobj(user)

//array

let arr=[20,12,23,15,26]

function arrayget(getarr)
{
    return getarr[1]
}

console.log(arrayget(arr)); 

