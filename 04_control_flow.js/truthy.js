const usermail="goutam@gmail.com"

if(usermail)
    {
        console.log("user login");
    }
else
{
    console.log("user not login");
}




//false value
//false, 0,-0, BigInt,0n,"",null,undefined,NaN

//true value ->all value other then above are true
//special true value "0","false", " ",[],{},function(){}



//array and object is empty or not
if(usermail.length===0)
    {
        console.log("array is empty");
    }


const obj={}
if(Object.keys(obj).length===0)
    {
        console.log("object is empty");
    }



//Nullish coalescing operator (??):bull undefiend


let val;
val=5??10
console.log(val);
val=null??5
console.log(val);
val=undefined??25
console.log(val);
val=null??10??20
console.log(val);



//terniary operator

//condition?true:false
