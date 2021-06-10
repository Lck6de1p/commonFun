function Promise(executor) {
  this.status = 'pending'
  this.value = null
  this.reason = null
  this.onFulfilledArray = []
  this.onRejectedArray = []
 
  const resolve = value => {
    if (value instanceof Promise) {
      return value.then(resolve, reject)
    }
    setTimeout(() => {
      if (this.status === 'pending') {
        this.value = value
        this.status = 'fulfilled'
 
        this.onFulfilledArray.forEach(func => {
          func(value)
        })
      }
    })
  }
 
  const reject = reason => {
    setTimeout(() => {
      if (this.status === 'pending') {
        this.reason = reason
        this.status = 'rejected'
 
        this.onRejectedArray.forEach(func => {
          func(reason)
        })
      }
    })
  }
 
 
  try {
    executor(resolve, reject)
  } catch(e) {
    reject(e)
  }
 }
 
 Promise.prototype.then = function(onfulfilled, onrejected) {
  // onfulfilled = typeof onfulfilled === 'function' ? onfulfilled : data => data
  // onrejected = typeof onrejected === 'function' ? onrejected : error => { throw error}
 
  if (this.status === 'fulfilled') {
    onfulfilled(this.value)
  }
  if (this.status === 'rejected') {
    onrejected(this.reason)
  }
  if (this.status === 'pending') {
    this.onFulfilledArray.push(onfulfilled)
    this.onRejectedArray.push(onrejected)
  }
 }