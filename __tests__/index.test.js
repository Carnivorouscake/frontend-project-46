// import { expect, test } from "@jest/globals";

// import getDiff from '../src/utils.js';

const filePath1 = '__fixtures__/file1.json';
const filePath2 = '__fixtures__/file2.json';
test('gendiff', () => {
    const str = '- follow: false,host: hexlet.io,- proxy: 123.234.53.22,- timeout: 50,+ timeout: 20,+ verbose: true';
    expect(getDiff(filePath1, filePath2)).toBe(str.replace(',', '\n'));
    //expect(getDiff().toBe(''))
})