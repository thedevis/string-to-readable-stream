# Convert string into a readable string


## Installation

clone the code from [github](https://github.com/thedevis/string-to-readable-stream.git) .

```bash
npm install string-to-readable-stream 
```

## Usage

```node
const  { stringToStream } = require('./string-to-readable-stream');
let string = "lorem ipsum is a simply dummy text of the printing and typesetting of industry";

let readableStream = stringToStream(string); //generate a readable stream

/** pipe to console **/
readableStream.pipe(process.stdout);



```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)