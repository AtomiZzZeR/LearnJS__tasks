"use strict";

function Calculator(value1, value2) {
    this.read = function () {
        value1 = +prompt("Введите 1-ое значение свойства объекта:", "");
        value2 = +prompt("Введите 2-ое значение свойства объекта:", "");

        this[value1] = value1;
        this[value2] = value2;
    }

    this.sum = function () {
        return value1 + value2;
    }

    this.mul = function () {
        return value1 * value2;
    }
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


