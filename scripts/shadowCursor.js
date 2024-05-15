const kinet = new Kinet({
  acceleration: 0.06,
  friction: 0.20,
  names: ["x", "y"],
})

const circle = document.getElementById('shadowCircle')

kinet.on('tick', instances => {
  circle.style.transform = `translate3d(${ (instances.x.current) }px, ${ (instances.y.current) }px, 0) rotateX(${ (instances.x.velocity/2) }deg) rotateY(${ (instances.y.velocity/2) }deg)`
})

document.addEventListener('mousemove', event => {
  kinet.animate('x', event.clientX - window.innerWidth/2)
  kinet.animate('y', event.clientY - window.innerHeight/2)
})