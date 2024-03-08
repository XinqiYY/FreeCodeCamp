# React

## Create a Simple JSX Element
React is an Open Source view library created and maintained by Facebook. It's a great tool to render the User Interface (UI) of modern web applications.

React uses a syntax extension of `JavaScript` called `JSX` that allows you to write `HTML` directly within `JavaScript`. It lets you use the full programmatic power of `JavaScript` within `HTML`, helps to keep your code readable. 

`JSX` is not valid `JavaScript`, `JSX` code must be compiled into `JavaScript`. The transpiler is `Babel`.

### Task
The current code uses `JSX` to assign a `div` element to the constant `JSX`. Replace the `div` with an `h1` element and add the text `Hello JSX!` inside it.
```const JSX = <h1>Hello JSX!</h1>;```

## Create a Complex JSX Element
### Task
Define a new constant `JSX` that renders a `div` which contains the following elements in order:

An `h1`, a `p`, and an `unordered list` that contains three `li` items. You can include any text you want within each element.
```
const JSX = 
<div>
  <h1>Hi</h1>
  <p>hiiii</p>
  <ul>
    <li>Paragraph One</li>
    <li>Paragraph Two</li>
    <li>Paragraph Three</li>
  </ul>
</div>
```

## Render HTML Elements to the DOM
```
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);

ReactDOM.render(JSX, document.getElementById("challenge-node"));
```

## Create a Stateless Functional Component
A stateless component as one that can receive data and render it, but does not manage or track changes to that data. 
```
const MyComponent = function() {
  return (
    <div>ss</div>
  )
}
```

## Create a React Component
The other way to define a React component is with the ES6 class syntax.
```
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
```
This creates an ES6 class `Kitten` which extends the `React.Component` class. So the `Kitten` class now has access to many useful React features.
Also notice the `Kitten` class has a `constructor` defined within it that calls `super()`. It uses `super()` to call the constructor of the parent class, in this case `React.Component`. The constructor is a special method used during the initialization of objects that are created with the class keyword.

## Render a Class Component to the DOM
```
ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));
```

## Pass an Array as Props
```
const List = (props) => {
  return <p>{props.tasks.join(',')}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>

        <List tasks={["walk dog", "workout"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["walk dog", "workout", "play"]}/>

      </div>
    );
  }
};
```

## Default Props
```
MyComponent.defaultProps = { location: 'San Francisco' }
```

## Use PropTypes to Define the Props You Expect
React provides useful type-checking features to verify that components receive props of the correct type:
```
Items.propTypes = { quantity: PropTypes.number.isRequired }

// define default props
Items.defaultProps = {
  quantity: 0
};
```

## Create a Stateful Component
State consists of any data your application needs to know about, that can change over time. 

- Access to the state object: ```this.state = {}```
- You must create a class component by extending `React.Component` in order to create state like this.

### Task: 
There is a component in the code editor that is trying to render a `firstName` property from its state. However, there is no state defined. Initialize the component with state in the constructor and assign your name to a property of `firstName`.
```
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        firstName : "Name"
      }
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};
```

## Render State in the User Interface
`state` is one of the most powerful features of components in React. It allows you to track important data in your app and render a UI in response to changes in this data. If your data changes, your UI will change. React uses what is called a virtual DOM, to keep track of changes behind the scenes. When state data updates, it triggers a re-render of the components using that data - including child components that received the data as a prop. React updates the actual DOM, but only where necessary. This means you don't have to worry about changing the DOM. You simply declare what the UI should look like.

### Task
In the code editor, `MyComponent` is already stateful. Define an `h1` tag in the component's render method which renders the value of name from the component's state.
```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

## Render State in the User Interface Another Way
```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    const name = this.state.name;

    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
};
```

## Set State with `this.setState`
`this.setState()` accept an object with `key-value` pairs. The keys are your state properties and the values are the updated state data.
- State updates through the `setState` method can be asynchronous

### Task
There is a `button` element in the code editor which has an `onClick()` handler. This handler is triggered when the button receives a click event in the browser, and runs the `handleClick` method defined on `MyComponent`. Within the `handleClick` method, update the component state using `this.setState()`. Set the `name` property in state to equal the string `React Rocks!`.
```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      name: 'React Rocks!'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

## Lifecycle Method componentWillMount
React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. These are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time. This can be before they are rendered, before they update, before they receive props, before they unmount, and so on. Here is a list of some of the main lifecycle methods: `componentWillMount()` `componentDidMount()` `shouldComponentUpdate()` `componentDidUpdate()` `componentWillUnmount()` 

Note: The `componentWillMount` Lifecycle method will be deprecated in a future version of 16.X and removed in version 17.

### `componentDidMount()`
This method is called after a component is mounted to the DOM. This method is called after a component is mounted to the DOM. Any calls to `setState()` here will trigger a re-rendering of your component. When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.

## Optimize Re-Renders with `shouldComponentUpdate`
This method is a useful way to optimize performance.
The method must return a boolean value that tells React whether or not to update the component. You can compare the current prop (`this.props`) to the next props (`nextProps`) to determine if you need to update or not.

## `Array.filter()`
```let onlineUsers = users.filter(user => user.online);```

## Render React on the Server with `renderToString()`
Why rendering on the server may be used in a real world app. 
- First, without doing this, your React apps would consist of a relatively empty HTML file and a large bundle of JavaScript when it's initially loaded to the browser. This may not be ideal for search engines that are trying to index the content of your pages so people can find you. If you render the initial HTML markup on the server and send this to the client, the initial page load contains all of the page's markup which can be crawled by search engines. 
- Second, this creates a faster initial page load experience because the rendered HTML is smaller than the JavaScript code of the entire app. React will still be able to recognize your app and manage it after the initial load.
```
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// Change code below this line
ReactDOMServer.renderToString(<App />);
```

## A stateless functional component 
is any function you write which accepts props and returns JSX
```
import React from 'react';

const StatelessComponent = (props) => {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
};

export default StatelessComponent;
```

## A stateless component
on the other hand, is a class that extends `React.Component`, but does not use internal state.
```
class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hi</h1>
      </div>
    );
  }
};
```

## A stateful component
is a class component that does maintain its own internal state. 
```
import React, { Component } from 'react';

class StatefulComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default StatefulComponent;
```

A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible. This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.