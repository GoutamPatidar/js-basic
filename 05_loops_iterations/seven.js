const num=[1,2,3,4,5,6,7,8,9,10]

// const newnum=num.map((num)=> num+10)
// console.log(newnum);

// const newnum=num.map((num)=>{ return num+10})
// console.log(newnum);


/****************chaining **************************** */
// filter is used for condition (output 0 or 1)
// map can be used for all things 

const newnum=num
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40)

console.log(newnum);


