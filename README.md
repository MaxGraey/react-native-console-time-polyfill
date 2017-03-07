## react-native-console-time-polyfill

Starts a timer you can use to track how long an operation takes. When you call ***console.timeEnd()*** with the same name, the react-native will output the time, in milliseconds, that elapsed since the timer was started.

Also you can use ***console.count()*** for determine number of function calls.

### Installation

Install library from `npm`

```bash
npm install react-native-console-time-polyfill --save
```

### Syntax

```javascript
console.time(label);
console.timeEnd(label);

console.count(label);
```

### Parameters

***label***

The name to give the new timer or counter. This will identify the timer or counter.

Use the same name when calling ***console.timeEnd()*** to stop the timer and get the time output to the console.

### Usage

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

    render() {
        console.count('render calls');
        return (
            <Text>some text</Text>;
        );
    }
}
```

### Output

```
init: 200ms
render calls: 2
```
