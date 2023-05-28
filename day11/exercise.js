// 30-days-react-challenge: Day 11: Events

// Exercises: Level 1

// 1. What is an event?
// An event is an action or an occurrence recognized by a software.

// 2. What is the different between an HTML element event and React event?
// For syntax in HTML, event names are written in lowercase, whereas in React, it is written in camelCase.
// In React, event handlers are specified at the time of creating a component using camelCase convention, and they are bound using the method name only (e.g., onClick={greet}), whereas in HTML, event handlers are added using the addEventListener method.
// In HTML, default behavior can be avoided by returning false in the event handler, while in React, preventDefault() must be called explicitly to avoid default behavior.
// ex: In HTML:
// <button onclick="activateLasers()"></button>
// ex: In React:
// <button onClick={activateLasers}>Click me</button>
// In HTML, you would need to invoke the function by appending parentheses to the function name (e.g., onclick="activateLasers()"). In React, you should not append parentheses with the function name.

// 3. Write at least 4 keyboard events?
/*

In React, you can handle keyboard events using the synthetic event system. Here are four keyboard event handlers in React:

onKeyDown: Triggered when a key is first pressed down.
onKeyPress: Triggered when a key is pressed down and released.
onKeyUp: Triggered when a key is released.
onKeyEnter: Triggered when the key code is an Enter key.
Here's an example of how to use these event handlers in a React component:
*/

import React from 'react';

class KeyboardEvents extends React.Component {
  handleKeyDown = (event) => {
    console.log('Key down:', event.key);
  };

  handleKeyPress = (event) => {
    console.log('Key press:', event.key);
  };

  handleKeyUp = (event) => {
    console.log('Key up:', event.key);
  };

  handleKeyEnter = (event) => {
    console.log('Enter key:', event.key);
  };

  render() {
    return (
      <div>
        <input type="text" onKeyDown={this.handleKeyDown} />
        <input type="text" onKeyPress={this.handleKeyPress} />
        <input type="text" onKeyUp={this.handleKeyUp} />
        <input type="text" onKeyEnter={this.handleKeyEnter} />
      </div>
    );
  }
}

export default KeyboardEvents;
// In this example, we have created a React component with four input elements. Each input element has an event handler for different keyboard events, such as handleKeyDown, handleKeyPress, handleKeyUp, and handleKeyEnter.


// 4. Write at least 8 mouse events?
/*
Here are eight mouse events in React:

onClick: Triggered when a mouse button is clicked on an element.
onDoubleClick: Triggered when a mouse button is double-clicked on an element.
onMouseDown: Triggered when a mouse button is pressed down on an element.
onMouseUp: Triggered when a mouse button is released over an element.
onMouseMove: Triggered when the mouse cursor moves over an element.
onMouseOver: Triggered when the mouse cursor moves onto an element.
onMouseOut: Triggered when the mouse cursor moves out of an element.
onMouseEnter: Triggered when the mouse cursor moves onto an element, similar to onMouseOver, but does not bubble up through the DOM kirupa.com.*/


// ex:
import React from 'react';

export class MouseEvents extends React.Component {
  handleClick = (event) => {
    console.log('Click:', event.target);
  };

  handleDoubleClick = (event) => {
    console.log('Double click:', event.target);
  };

  handleMouseDown = (event) => {
    console.log('Mouse down:', event.target);
  };

  handleMouseUp = (event) => {
    console.log('Mouse up:', event.target);
  };

  handleMouseMove = (event) => {
    console.log('Mouse move:', event.target);
  };

  handleMouseOver = (event) => {
    console.log('Mouse over:', event.target);
  };

  handleMouseOut = (event) => {
    console.log('Mouse out:', event.target);
  };

  handleMouseEnter = (event) => {
    console.log('Mouse enter:', event.target);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <button onDoubleClick={this.handleDoubleClick}>Double click me</button>
        <button onMouseDown={this.handleMouseDown}>Mouse down</button>
        <button onMouseUp={this.handleMouseUp}>Mouse up</button>
        <button onMouseMove={this.handleMouseMove}>Mouse move</button>
        <button onMouseOver={this.handleMouseOver}>Mouse over</button>
        <button onMouseOut={this.handleMouseOut}>Mouse out</button>
        <button onMouseEnter={this.handleMouseEnter}>Mouse enter</button>
      </div>
    );
  }
}

// 5. What are the most common mouse and keyboard events?
// The most common mouse keyboard events:
// onClick, onDoubleClick, onMouseMove, onMouseEnter
// The most common keyboard events:
// onKeyPress, onKeyUp, onKeyDown, onKeyEnter


// 6. Write an event specific to input element?
// <input type='text' onKeyPress={this.handleKeyPress} /> 
// ex:
import React from 'react';

export class InputEvents extends React.Component {
  handleInput = (event) => {
    console.log('Input:', event.target.value);
  };

  render() {
    return (
      <div>
        <input type="text" onInput={this.handleInput} />
      </div>
    );
  }
}


// 7. Write an event specific to form element?

import React, { Component } from 'react'
import { Form } from 'react-router-dom';

export default class FormEvents extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted')
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='username'></input>
        <input type='password' name='password'></input>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

// 8. Display the coordinate of the view port when a mouse is moving on the body?

import React, { Component } from 'react'

export class MouseCoordinates extends Component {
    handleMouseMove = (e) => {
        const x = e.clientX
        const y = e.clientY
        const coordinates = `Coordinates: X: ${x}, ${y}`
        console.log(coordinates)
    }
  render() {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        background: 'lightgrey',
        position: 'absolute',
        top: 0,
        left: 0,
      }} onMouseMove={this.handleMouseMove}>exercise</div>
    )
  }
}

// 9. What is the difference between onInput, onChange and onBlur?
/*
The `onInput`, `onChange`, and `onBlur` events are used to handle user interactions with form elements, specifically input elements.

1. `onInput`: This event occurs when the text content of an element is changed through the user interface [Source 0](http://rakshasingh.weebly.com/blog/what-is-the-difference-between-oninput-and-onchange-events-in-javascript). It is triggered immediately after the value of an element has changed [Source 8](https://thequickadvisor.com/what-is-the-difference-between-oninput-and-onchange/).

2. `onChange`: This event occurs when the selection, the checked state, or the contents of an element have changed [Source 0](http://rakshasingh.weebly.com/blog/what-is-the-difference-between-oninput-and-onchange-events-in-javascript). It is triggered when the element loses focus after the content has been changed [Source 8](https://thequickadvisor.com/what-is-the-difference-between-oninput-and-onchange/). In some cases, it only occurs when the element loses focus.

3. `onBlur`: This event is fired when an element loses focus, without necessarily having changed its value [Source 1](https://stackoverflow.com/questions/785099/what-is-the-difference-between-onblur-and-onchange-attribute-in-html). It is often used with form validation when the user leaves a form field [Source 12](https://www.w3schools.com/jsref/event_onblur.asp).

In React, both `onInput` and `onChange` are used to handle user input in real-time. The main difference between them is when they are triggered. `onInput` is triggered immediately after the value of an element has changed, while `onChange` is triggered when the element loses focus after the content has been changed [Source 8](https://thequickadvisor.com/what-is-the-difference-between-oninput-and-onchange/). 
*/

// 10. Where do we put the onSubmit event ?
// in submit button element, form element