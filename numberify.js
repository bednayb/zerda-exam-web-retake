"use strict";

function numberify(option){
  if(option.number < 100){
    if(option.number < 10){
      option.number = "00" + option.number
    }else{
      option.number = "0" + option.number
    }
    return option.number
  }
  if(option.case == "tech"){
    option.number += 500;
    if(option.number > 1000){
      option.number -= 1000;
      if(option.number < 10){
        option.number = "00" + option.number;
        return option.number;
      }else if(option.number <100){
        option.number = "0" + option.number;
      }else if(
        option.number = option.number + ""
      ){
        return option.number
      }
    }
    return option.number
  }else if(option.case == "admin"){
    option.number += 100;
  }if(option.number > 1000){
    option.number -= 1000;
    option.number = "number";
  }
  return option.number
}




module.exports = numberify;
