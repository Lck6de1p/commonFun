function debounce(fn, delay) {
  let timer = null
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(fn, args)
    }, delay || 400)
  }
}

function foo() {
  console.log('debounce')
}
const debounceFoo = debounce(foo)

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    debounceFoo()
  }, 300 * i)
}