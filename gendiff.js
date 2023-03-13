const { program } = require('commander'); // include commander in git clone of commander repo

let version = '0.0.1';

program
.option('-h, --help')
.option('-V, --version')
.option('-f, --format');
program.parse(process.argv);

const options = program.opts();
if (options.help) console.log(`Usage: gendiff [options]

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -h, --help           display help for command
  -f, --format <type>  output format`);

if(options.version) console.log(`Program version: ${version}`);
if(options.format) console.log('')
