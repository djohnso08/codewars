'use strict';

function find_average(array) {
  let total = 0;
  for(var i = 0; i < array.length; i++) {
    total += array[i];
  }
  let avg = total / array.length;
  return avg;
}