"use strict";

function Calculator(value1, value2) {
    this.read = function () {
        this.value1 = +prompt("Введите 1-ое значение свойства объекта:", "");
        this.value2 = +prompt("Введите 2-ое значение свойства объекта:", "");
    }

    this.sum = function () {
        return this.value1 + this.value2;
    }

    this.mul = function () {
        return this.value1 * this.value2;
    }
}

const calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


