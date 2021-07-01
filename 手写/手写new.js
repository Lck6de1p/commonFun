function mynew(constructor, ...args) {
  var obj = {};
  
  obj.__proto__ = constructor.prototype;
  let result = constructor.apply(obj, args)
  return typeof result === 'object' ? result : obj

}

function Person(name, age) {
  this.name = name;
  this.age = age
}

let p1 = mynew(Person, 'lck', 18)

const p2 = new Person('zzz', 1)

console.log(p1, p2)