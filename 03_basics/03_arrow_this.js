const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

/*************************** in browser this result in window and in node enviroment it result in empty object **********************/


/********************************************************************************************************* */


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// this function work with object and function declared inside the object but not work with functions

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }



const chai =  () => {
    let username = "hitesh"
    console.log(this);
    // console.log(this.username);
}


chai()


/************************************************************** */

//strict arrow function
// simple aaraow function or explicit return arrow function
const addTwo = (num1, num2) => {
    return num1 + num2
}


//implicit retrun arrow function 
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()