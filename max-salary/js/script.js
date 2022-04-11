"use strict";

function topSalary(salaries) {
    let max = 0,
        nameMax = null;

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > max) {
            max = salary;
            nameMax = name;
        }
    }   
    return nameMax ;
}

const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
};

alert(topSalary(salaries));