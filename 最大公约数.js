function gcd(a, b) {
  const t = a % b
  if (t === 0) return b
  return gcd(b, t)
}

console.log(gcd(100, 20))