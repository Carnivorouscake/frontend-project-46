import getDiff from '../src/utils.js'
import { Command } from 'commander';

const program  = new Command();
let version = '0.0.1';

program
.option('-h, --help')
.option('-V, --version')
.option('-f, --format [type]', 'output format')
.argument('filePath1', 'path to file1')
.argument('filePath2', 'path to file2')
.action((filePath1, filePath2) => {
  console.log(getDiff(filePath1, filePath2));
});

program.parse(process.argv);

const options = program.opts();
if (options.help) console.log(`Usage: gendiff [options]

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -h, --help           display help for command
  -f, --format <type>  output format`);

if(options.version) console.log(`Program version: ${version}`);
if(options.format) console.log('');

