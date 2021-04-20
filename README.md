# About
This is by no means an optimized, performant, or accurate state machine. I am using this as a chance to learn some more programming concepts and wanted to build something small to play around with. 

Quick sample on how it works

```js
    let StateMachine = require('./State.js');

    let initialState = 'default';

    let transitions = {
        default: {click: "loading"},
        loading: {success: "active", fail: "error"},
        active: {exit: "default"},
        error: {exit: "default", click: "loading"}
    }

    let s = new StateMachine(initialState, transitions);

    // "default"
    console.log(s.state);

```