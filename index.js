let StateMachine = require('./State.js');

let initialState = 'default';

let transitions = {
    default: {click: "loading"},
    loading: {success: "active", fail: "error"},
    active: {exit: "default"},
    error: {exit: "default", click: "loading"}
}

let s = new StateMachine(initialState, transitions);

console.log(s.state);



