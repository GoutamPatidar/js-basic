// var ->global scope


// let a=100

// if(true){
//     let a=10
//     const b=2
//     var c=23

//     console.log(a);
// }

// console.log(a);
// // console.log(b);
// console.log(c);



// console and node vscode have different behavior of global varible scope 


//*********************************************************************************** 


// function one(){

//     const username="goutam"
//     function two(){
//         const web ="you"
//         console.log(username);
//     }
//     //console.log(web);// error not accessible 
//     two()
// }

// one()


//***********************************************************************************************
//concept of hoiisting -> how to declare the function 

// can access function before declaration
console.log(addone(2));

function addone(num){
    return num+1
}



//cannnot access the function before declaration
const addtwo=function (num){
    return num+2
}

console.log(addtwo(3));




