"use strict"

const {MyMath} = require("./MyMath")
const {Component} = require("./Component")

console.log("hi, node!")

const res = MyMath.sum(4,8);
console.log("result = ", res)


const component1 = new Component()
component1.render()


/* 
require 
resolving -> loading -> wrapping -> evalution -> caching
 --- запуск(один раз запускається) і виконання(після запуску - кешується) 

-----resolving :
    1 - core module, 
    2 - filename.js якщо не знаходить шукає filename.json якщо не знаходить шукає 
    3 - 3.1 - directory/package.json -> key "main" якщо не знаходить шукає json or main 
    3.2 - directory/index.js | directory/index.json
    4 - node_modules
    5 - throw new Error()
*/