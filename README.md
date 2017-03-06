## react-native-console-time-polyfill

Starts a timer you can use to track how long an operation takes. When you call console.timeEnd() with the same name, the react-native will output the time, in milliseconds, that elapsed since the timer was started.

### Installation

Install library from `npm`

```bash
npm install react-native-console-time-polyfill --save
```

### Syntax

```javascript
console.time(label);
console.timeEnd(label);
```

### Parameters


***label***

The name to give the new timer. This will identify the timer; use the same name when calling ***console.timeEnd()*** to stop the timer and get the time output to the console.

### <a name="Usage">Usage</a>

Use the following code:

```javascript
import 'react-native-console-time-polyfill';

class Example extends Component {
    constructor(props) {
        super(props);

        console.time('init');
        // "some slow initializaton code"
        console.timeEnd('init');
    }
}
```

### Output

```
init: 200ms
```
