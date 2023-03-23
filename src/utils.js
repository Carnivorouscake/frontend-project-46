import { readFileSync } from 'fs';

import getObjectFromFile from '../src/parser.js';

const compare = (a, b) => {
  if (a[1] === b[1]) {
    return 0;
  }

  return a[1] > b[1] ? 1 : -1;
};



const getDiff = (filePath1, filePath2) => {




   const object1 =  getObjectFromFile(filePath1);
   const object2 =  getObjectFromFile(filePath2);


  let result = [];
  for (let key in object1){
    let child = object1[key];
    if(object2[key] === child) {
        result.push(['  ', key  , child] )
    }else{
        result.push(['- ' , key ,  child] )
    }
  }
  for (let key in object2){
    let child = object2[key];
    if(object1[key] !== child) {
        result.push(['+ ', key , child] )
    }
  }
  result.sort(compare);
  let arreyResult = [];
  for(const element of result) {
    arreyResult.push(element[0] + element [1] + ': ' + element[2])
  }
  return arreyResult.join("\n");

};

export default getDiff;