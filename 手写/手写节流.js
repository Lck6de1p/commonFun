function throttle(fn, delay) {
  let timer = null
  return function(...args) {
    if (timer) return
    timer = setTimeout(() => {
      timer = null
      fn.apply(fn, args)
    },delay || 400)
  }
}

function bar() {
  console.log('throttle')
}

const throttleBar = throttle(bar)

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    throttleBar()
  }, 300 * i)
}