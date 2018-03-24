'use strict';

function insertDash(num) {
  let string = num.toString();
  return string.replace(/[13579](?=[13579])/g, '$&-');
}