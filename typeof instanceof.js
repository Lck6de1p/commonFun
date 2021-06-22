// typeof 在判断非object类型数据的时候准确
let s = new String('abc')
typeof s === 'object' // true

/*
  js在底层存储变量的时候，会在变量的机器码低位1-3位存储类型信息

  000: 对象
  010: 浮点数
  100: 字符串
  110: 布尔
  1: 整数
  

  null的机器码全为0　所以　typeof null === 'object',
  但是用 null instanceof null  直接报错null不是object
*/


// 使用Object.prototype.toString判断类型

Object.prototype.toString.call(1) // "[object Number]"

Object.prototype.toString.call('hi') // "[object String]"

Object.prototype.toString.call({a:'hi'}) // "[object Object]"

Object.prototype.toString.call([1,'a']) // "[object Array]"

Object.prototype.toString.call(true) // "[object Boolean]"

Object.prototype.toString.call(() => {}) // "[object Function]"

Object.prototype.toString.call(null) // "[object Null]"

Object.prototype.toString.call(undefined) // "[object Undefined]"

Object.prototype.toString.call(Symbol(1)) // "[object Symbol]"