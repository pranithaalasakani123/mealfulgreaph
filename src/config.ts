import { useState } from 'react';
import json from './P2VO.json';
export const fetchData = () => {
    const response = json.sort();
    // console.log(response)
    return response;
}
export const date = fetchData().map((e)=>{
    return(e.item_date);
});

// console.log(date);

let chars = date;
let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);

export const unique = uniqueChars.sort();


 const time = fetchData().map((e)=>{
    return(e.schedule_time);
});
export const sc_time =time.sort();
console.log(time.sort());

const arr = date
const counts:any ={};
arr.forEach((x) => {
  counts[x] = (counts[x] || 0) + 1;

 
});


export const schedule =counts;




const name:any = {}

date.forEach((x,i)=>{
    name[i] = x
})

console.log(name);




