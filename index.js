"use strict"

const {MyMath} = require("./MyMath")
const {Component} = require("./Component")

console.log("hi, node!")

const res = MyMath.sum(4,8);
console.log("result = ", res)


const component1 = new Component()
component1.render()