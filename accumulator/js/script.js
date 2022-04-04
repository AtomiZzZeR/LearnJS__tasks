"use strict";

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        let number = +prompt("Enter number:", "");
        this.value += number;
    }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);