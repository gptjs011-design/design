document.addEventListener('DOMContentLoaded', function () {
  /* Device Object Size Responsive */
  rem()
  window.addEventListener('resize', rem)

  /* Device Viewport Size Responsive */
  /*
  dvs()
  window.addEventListener('resize', dvs)
  */

  /* Iphone Check */
  if (navigator.userAgent.match(/iP(hone|od|ad)/)) {
    document.getElementsByName('viewport')[0].setAttribute('content', 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no')
  } else {
    document.getElementsByName('viewport')[0].setAttribute('content', 'width=device-width, initial-scale=1.0')
  }

  /* Device Check */
  if (navigator.userAgent.match(/Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)) {
    document.querySelector('body').classList.add('dv_mobile')
  } else {
    document.querySelector('body').classList.add('dv_pc')
  }
})

/* Device Object Size Responsive */
function rem() {
  let clientWidth = document.documentElement.clientWidth
  let breakPoint = 1900
  let remBreakPoint = document.documentElement.clientWidth / breakPoint
  if (clientWidth < breakPoint) {
    document.querySelector(':root').style.setProperty('font-size', (remBreakPoint * 10) + 'px')
  } else {
    document.querySelector(':root').style.setProperty('font-size', '10px')
  }
}

/* Device Viewport Size Responsive */
function dvs() {
  let dvw = document.documentElement.clientWidth * 0.01
  let dvh = document.documentElement.clientHeight * 0.01
  document.querySelector(':root').style.setProperty('--dvw', dvw + 'px')
  document.querySelector(':root').style.setProperty('--dvh', dvh + 'px')
}