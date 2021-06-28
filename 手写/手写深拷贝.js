function deepCopy(target, source) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] && typeof source[key] === 'object') {
        target[key] = Array.isArray[source[key]] ? [] : {};
        deepCopy(target[key], source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
}

const obj1 = {
  name: 'lck',
  age: 23,
  card: [1,2,3,4],
  hobby: undefined,
  sum: function() { return this.name + this.age; }
};
let obj2 = {};
let obj3 = JSON.parse(JSON.stringify(obj1)); 
deepCopy(obj2, obj1);
obj1.name = 'lck6de1p'
console.log(obj1, obj2, obj3);
console.log(obj1.sum());