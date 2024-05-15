const l_to_r = document.querySelectorAll('.bg-move-lToR')
const r_to_l = document.querySelectorAll('.bg-move-rToL')
const elementMix = [...l_to_r, ...r_to_l]

let lastScrollTop = 0
let counter = 0
let extraSpeed = 2;

elementMix.forEach(e => {
  e.style.transform = 'rotate(var(--rotate)) translateX(var(--translateX)'
})

window.addEventListener("scroll", _ => {

  let st = window.pageYOffset || document.documentElement.scrollTop

  st < lastScrollTop && counter++
  st > lastScrollTop && counter--

  lastScrollTop = st <= 0 ? 0 : st

  l_to_r.forEach(e => {
    
    e.style.setProperty('--translateX', `${counter*extraSpeed}px`)
  })

  r_to_l.forEach(e => {
    e.style.setProperty('--translateX', `${-counter*extraSpeed}px`)
  })

})