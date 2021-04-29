function rgb2hex(sRGB) {
  const rgb = sRGB.match(/\d+/g)
  return rgb.reduce((acc, cur) => {
    const hex = (cur < 16 ? '0': '') + Number(cur).toString(16)
    return acc + hex
  }, '#')
  
}

console.log(rgb2hex('rgb(255,255,255)'))
