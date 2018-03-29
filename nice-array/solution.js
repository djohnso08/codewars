'use strict';

function isNice(arr){
  if (arr.length === 0) return false;
  else {
    return arr.every(value => arr.includes(value + 1) || arr.includes(value - 1));
  }
}
