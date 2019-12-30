#!/bin/node

const args = process.argv.slice(2);

const input_encoding = args[0];
if(!input_encoding){throw new Error('Invalid Input')};
const output_encoding = args[1] || 'utf8';

process.stdin.resume();
process.stdin.setEncoding(input_encoding);
process.stdin.on('data', function(data) {
    process.stdout.write(data, output_encoding);
});
