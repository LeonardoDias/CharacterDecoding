#!/bin/node

var input_encoding = process.argv.slice(2)[0];
var output_encoding = process.argv.slice(2)[1];

process.stdin.resume();
process.stdin.setEncoding(input_encoding);
process.stdin.on('data', function(data) {
    process.stdout.write(data, output_encoding);
});
