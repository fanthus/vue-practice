

// app.js
// import handle from './b.js'

// if (handle && handle.type == 0) {
//   console.log(`register new`)
// }

// let value = {
//   "content-type": 'application/json'
// }
// console.log(value['content-type'])

// import data from "./json-object.json"
// console.log(data)

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
console.log(obj1 === obj2);


let skuList = [
  { "name": "fan" },
  { "name": "wang" }
]
let sku = skuList[0]
console.log(sku === skuList[0])
