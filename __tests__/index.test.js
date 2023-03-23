import getDiff from '../src/utils.js';

const filePathJson1 = '__tests__/__fixtures__/file1.json';
const filePathJson2 = '__tests__/__fixtures__/file2.json';

const filePathYaml1 = '__tests__/__fixtures__/file1.yaml';
const filePathYaml2 = '__tests__/__fixtures__/file2.yaml';

 test('gendiffJson', () => {
     const str = '- follow: false\n  host: hexlet.io\n- proxy: 123.234.53.22\n- timeout: 50\n+ timeout: 20\n+ verbose: true';
     expect(getDiff(filePathJson1, filePathJson2)).toBe(str);
});

test('gendiffYaml', () => {
    const str = '- follow: false\n  host: hexlet.io\n- proxy: 123.234.53.22\n- timeout: 50\n+ timeout: 20\n+ verbose: true';
    expect(getDiff(filePathYaml1, filePathYaml2)).toBe(str);
});
