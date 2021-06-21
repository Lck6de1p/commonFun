// 简陋版
// Function.prototype.call = function(thisArg, ...args) {
//   thisArg.fn = this
//   return thisArg.fn(...args)
// }

// 优化
Function.prototype.call = function(context, ...args) {
  const func = this
  if (typeof func !== 'function') {
    throw new TypeError('err:不是函数，无法被调用!')
  }

  const fn = Symbol()
  // 给call指向的对象添加一个独一无二的函数
  context[fn] = this
  const result = context[fn](...args)
  // 删除该函数，保持context原样
  delete context[fn]
  return result
}

function foo() {
  console.log(this.name)
}

const obj = {
  name: 'lck'
}

foo.call(obj, 1)