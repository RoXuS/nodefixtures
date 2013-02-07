# Nodefixtures

Simply a node module to get the fixtures easily. Inspired by [fixtures](https://github.com/ppcano/fixtures).


## Installation

Install via npm:
    $ npm install nodefixtures


## Usage

Declare your fixtures in json object in a js files :

```js
    {
        "subscriber1" : {
            "key1": "value1",
            "key2": "value"
        },
        "subscriber2" : {
            "key1": "value1"
        }
    } 
```

To access these fixtures :

```js
    var nodefixtures = require('nodefixtures');

    // Load path
    nodefixtures.setPath('./fixtures/subscribers.js');
    
    // Load fixtures
    nodefixtures.load();

    // Fixtures
    nodefixtures.subscribers.subscriber1.key1; // Return value1
```


## License

(The MIT License)

Copyright (c) 2013 Julien Rousseau &lt;julienrss@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
