import { readFileSync } from 'fs';

const compare = (a, b) => {
  if (a[1] === b[1]) {
    return 0;
  }

  return a[1] > b[1] ? 1 : -1;
};
const filePath1 = 'file1.json';
const filePath2 = 'file2.json';

const fileData1 = readFileSync(filePath1, { encoding: 'utf8', flag: 'r'});
const fileData2 = readFileSync(filePath2,  { encoding: 'utf8', flag: 'r'});

const object1 = JSON.parse(fileData1);
const object2 = JSON.parse(fileData2); 


const getDiff = (object1, object2) => {
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


console.log(getDiff(object1, object2))