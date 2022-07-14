"use strict";
// ստեղծում եք spread operator-ի նման ֆունկցիա, որը կվերցնի զանգվածներ ու 
// կսփրի ինչ-որ այլ զանգվածի մեջ

function mySpread(arr, arr1){
  for(let i = 0; i < arr1.length; i++){
    if(typeof arr1[i] === "object" ){
      for(let j = 0; j < arr1[i].length; j++){
        arr1.push(arr1[i][j]);
      }
    }else{
      arr.push(arr1[i]);
    }
  }
  return arr;
}

const cars = ["Mercedes", "BMW"];
const cars1 = ["Range-Rover", ["Tesla", "Rivian"], ["Lamborghini", "Ferrari"]];
const allCars = mySpread(cars, cars1);
// console.log(mySpread(cars, cars1));
console.log(allCars);