const EventEmitter = require('events');

class StateMachine {

    constructor(initialState, transitions) {
        this.state = initialState;
        this.transitions = transitions;
        this.emitter = new EventEmitter();
    }

    emit(n) {
        let nextState = this.transitions[this.state][n];
        if(!nextState) throw new Error(`invalid: ${this.state} -> ${n}`);

        this.state = nextState;
        this.emitter.emit(n);
    }

    on(state, cb) {

        this.emitter.on(state, cb);
    }

}

module.exports = StateMachine;
