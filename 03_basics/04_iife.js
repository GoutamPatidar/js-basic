//iife

//why iife?
//iife are the function which execute imediately and sometime Global varibale pollute the function call and to avoid thatpoluttion we use iife 


(function chai(){
    console.log(`DB connected`);
})();
//-> named iife
//; ->is used to addnew iife function 

//first ()-> defination of fn and 2nd () is execution of function




(()=>{
    console.log(`DB connected`);
})();

((name)=>{
    console.log(`DB connected ${name}`);
})("goutam");