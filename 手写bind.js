
function list() {
  return Array.prototype.slice.call(arguments)
}

// 手写bind
Function.prototype.bind = function() {
  const slice = Array.prototype.slice,
        func = this,
        _thisArg = arguments[0]
  if (typeof func !== 'function') {
    throw new TypeError('绑定的不是一个函数，无法调用！')
  }
  const args = slice.call(arguments, 1)
  return function() {
    const funcArgs = args.concat(slice.call(arguments))
    return func.apply(_thisArg, funcArgs)
  }
}

var list1 = list(1,2,3)
console.log(list1)

// 创建一个函数，它拥有预设参数列表
var leadingThirtySevenList = list.bind(null, 37, 38, 39)

var list2 = leadingThirtySevenList(12)
console.log(list2)

var list3 = leadingThirtySevenList(1,2,3)
console.log(list3)


