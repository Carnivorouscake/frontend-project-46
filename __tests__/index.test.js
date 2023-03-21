// import { expect, test } from "@jest/globals";

import getDiff from '../src/utils.js';

//const getdiff = getdiff();
const filePath1 = '__tests__/__fixtures__/file1.json';
const filePath2 = '__tests__/__fixtures__/file2.json';

// const str = '- follow: false,host: hexlet.io,- proxy: 123.234.53.22,- timeout: 50,+ timeout: 20,+ verbose: true';


// if(getdiff(filePath1, filePath2) !== str.replace(',', '\n')){
//     throw new Error('error!')
// }
 test('gendiff', () => {
     const str = '- follow: false\n  host: hexlet.io\n- proxy: 123.234.53.22\n- timeout: 50\n+ timeout: 20\n+ verbose: true';
     expect(getDiff(filePath1, filePath2)).toBe(str);
    //expect(getDiff().toBe(''))
})