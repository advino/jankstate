let StateMachine = require('./State.js');

let initialState = 'default';

let transitions = {
    default: {click: "loading"},
    loading: {success: "active", fail: "error"},
    active: {exit: "default"},
    error: {exit: "default", click: "loading"}
}

let s = new StateMachine(initialState, transitions);

// event listener for transition "click"
s.on('click', () => {

    s.getState();
    s.emit('success');
});

// event listern for transition "success"
s.on('success', () => {

    s.getState();
    s.emit('exit');
});

// emit "click" transition
s.emit('click');