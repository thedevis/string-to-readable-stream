const assert = require('assert');
const {EventEmitter} = require('events')

const s2s = require('../index');
describe('String to readable Stream Conversion', function () {
    describe('stringToStream', function () {
        it('Empty String handling', function () {
            assert(isReadableStream(s2s.stringToStream("")),"Empty String handling");
        });
        it('Array type input', function () {
            assert(isReadableStream(s2s.stringToStream([1,23,4])),"Empty String handling");
        });
        it('should correct return', function () {
            let readableStream = s2s.stringToStream("I am testing string");
            let data = "";
            readableStream.on('data',chunk=>data+=chunk);
            readableStream.on('end',()=>{
                assert(data === "I am testing string","Error in correct stream data" )
            })
            readableStream.on('error',err=>{
                assert(false,err);
            })
        });
    });

    
});


function isReadableStream(test_stream) {
    return test_stream instanceof EventEmitter && typeof test_stream.read === 'function'
}
