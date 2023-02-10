import { createAction } from "@reduxjs/toolkit";

const INCREMENT = "INCREMENT";
const increment = createAction(INCREMENT);
console.log(increment);
