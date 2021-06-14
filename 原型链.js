// 原型对象
function Person(name, age) {
  this.name = name
  this.age = age
}
// 给原型对象添加一个方法 实例对象也可以访问
Person.prototype.say = function () {
  console.log(this.name)
}
// 实例对象
const person = new Person('xiaoming', 18)
person.say()
console.log(person.__proto__ === Person.prototype)

console.log(Person.prototype.constructor)

// 查看自身是否有该属性
console.log(person.hasOwnProperty('say'))
console.log(person.__proto__.__proto__.hasOwnProperty('hasOwnProperty'))

console.log(person.__proto__.__proto__.__proto__)
/*我们所创建的每一个函数，解析器都会向函数中添加一个属性prototype 
  这个属性对应着一个对象，这个对象就是我们所谓的原型对象
  
  如果函数作为普通函数调用prototype没有任何作用
  
  当函数以构造函数的形式调用时，它所创建的对象中都有一个隐含的属性
  指向这个构造函数的原型对象，可以通过__proto__来访问
  
  原型对象相当于一个公共的区域，所有同一个类的实例都能访问
  */