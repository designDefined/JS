function foo () {
  console.log(this.a);
}

let a = 2;

foo.call(null);


function curry (f) {
  return function (a) {
    return function (b) {
      return f(a,b);
    }
  }
}

function subtract (a,b) {
  return a-b;
}


let cf = curry(subtract);
alert(cf);
