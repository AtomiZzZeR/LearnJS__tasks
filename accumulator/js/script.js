"use strict";

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        const number = +prompt("Enter number:", "");
        this.value += number;
    }
}

const accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);
