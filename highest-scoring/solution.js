'use strict';

function high(x){
  let sumOfLetters = [];
  let value = 0;
  for(let i=0; i<x.length; i++) {
    if(x.charCodeAt(i) !== 32) {
      value += x.charCodeAt(i)-96;
    } else {
      sumOfLetters.push(value);
      value = 0;
    }
    if(i+1 === x.length) {
      sumOfLetters.push(value);
    }
  }
  let highScore = sumOfLetters.indexOf(Math.max.apply(null, sumOfLetters));
  let splitString = x.split(' ');
  for(let j=0; j<x.length; j++) {
    if(highScore===j) {
      return splitString[j];
    }
  }
}