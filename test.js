let s2s = require('./index');
s2s.stringToStream("Praveen",'base64').pipe(process.stdout);