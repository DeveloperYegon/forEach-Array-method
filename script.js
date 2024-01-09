//array initialisation
const numbers =[1,2,3,4,5];
console.log(numbers);
//array methods
//=================================forEach() method============================================
        //displaying items in an array
numbers.forEach((item,index,arr)=> console.log(item));

        //displaying indexes
numbers.forEach((item,index,arr)=> console.log(index)); 

        //displaying Array
numbers.forEach((item,index,arr)=> console.log(arr)); 

        //Adding numbers in an array
let sum =0;
numbers.forEach(item=> sum+=item);
console.log(sum);

        //counting occurence of a letter in an array
const letters=["a","a","b","c","d","b"];
let count={};
letters.forEach(item=>{
    if(count[item]){
        count[item]++;
    }else{
        count[item]=1;
    }
});
console.log(count);


//forEach implementation
let counting =0;
const counter= document.getElementById("count");
const btns= document.querySelectorAll("#btns");
console.log(btns);
console.log(counter);

btns.forEach(function(item){
console.log(item);
});
