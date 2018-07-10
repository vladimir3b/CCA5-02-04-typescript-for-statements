"use strict";

// Write Javascript code!
function line() {
  console.log("--------------------------------------------------------");
}

function test1() {
  let a: Array<number> = [-4, 65, 75, 4.25, -3.1415, 87556, -841];

  let myObject = {
    name: "box",
    color: "blue",
    mass: "15 kilos",
    price: "$65.2"
  };

  for (let i: number = 0; i <= a.length - 1; i++) {
    console.log(a[i]);
  }
  line();

  a.forEach((value: number, index: number): void =>
    console.log(`a[${index}] = ${value}`)
  );
  line();

  for (let prop: string in myObject) {
    console.log(prop);
  }
  line();

  for (let index: any in a) {
    console.log(0 + index); // in this case index is a string
  }
  line();

  for (let value of a) {
    console.log(value);
  }
  line();

  for (let value of myObject) {
    console.log(value); // this doesn't work 
  }
  line();
}

