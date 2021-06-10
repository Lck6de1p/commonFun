Function.prototype.bind = function(context, ...args1) {
  const func = this
  if (typeof func !== 'function') {
    throw new TypeError('err')
  }
  return function(...args2) {
    const funcArgs = args1.concat(args2)
    return func.apply(context, funcArgs)
  }
}

function list() {
  return Array.prototype.slice.call(arguments)
}

var list1 = list(1,2,3)
console.log(list1)

// 创建一个函数，它拥有预设参数列表
var leadingThirtySevenList = list.bind(null, 37, 38, 39)

var list2 = leadingThirtySevenList(12)
console.log(list2)

var list3 = leadingThirtySevenList(1,2,3)
console.log(list3)