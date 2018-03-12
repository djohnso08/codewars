'use strict';

function checkExam(array1, array2) {
  var answer = 0;
  for (var i = 0; i < array1.length; i++) {
    if(array1[i] === array2[i]){
      answer += 4;
    }
    if(array1[i] !== array2[i] && array2[i] !== ''){
      answer --;
    }
    if(array2[i] === ''){
      answer += 0;
    }
  }
  if (answer < 0){
    answer = 0;
  }
  return answer;
}