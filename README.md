## react-native-console-time-polyfill

Starts a timer you can use to track how long an operation takes. When you call ***console.timeEnd()/console.timeLog()*** with the same name, the react-native will output the time, in milliseconds, that elapsed since the timer was started.

Also you can use ***console.count()*** and ***console.countReset()*** for determine number of function calls.

### Installation

Install library from **npm**

```bash
npm install --save react-native-console-time-polyfill
```

or **yarn**

```bash
yarn add react-native-console-time-polyfill
```

### Syntax

```javascript
console.time(label);
console.timeLog(label);
console.timeEnd(label);

console.count(label);
console.countReset(label);
```

### Parameters

***label***

The name to give the new timer or counter. This will identify the timer or counter.

Use the same name when calling ***console.timeEnd()*** to stop the timer and get the time output to the console.

### Usage

Use the following code:

```javascript
// in your root javascript file
import 'react-native-console-time-polyfill';

// now you can use polyfill in your components
class Example extends Component {
  constructor(props) {
    super(props);

    console.time(`${this.constructor.name} init`);
    // "some slow initializaton code"
    console.timeEnd(`${this.constructor.name} init`);
  }

  componentWillUnmount() {
    console.countReset(`${this.constructor.name}.render calls`);
  }

  render() {
    console.count(`${this.constructor.name}.render calls`);
    return (
      <Text>some text</Text>;
    );
  }
}
```

### Output

```
Example init: 200ms
Example.render calls: 2
```
