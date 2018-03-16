'use strict';

function abbrevName(name){

  var name = name.split(' ');
  return (name[0][0] + '.' + name[1][0]).toUpperCase();
}