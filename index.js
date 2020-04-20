'use strict';
const { Readable } = require('stream');
function stringToStream(string,encoding = 'utf-8') {
    const readableStream = new Readable({
        read(size) {
            this.push(Buffer.from(string,encoding));
            this.push(null);
        }
    });
    return readableStream;
}
module.exports = {
    stringToStream
}
