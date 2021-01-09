window.addEventListener('beforeunload', function (e) {
  e.preventDefault()
});


function getRandomModal() {
  return Math.floor(Math.random() * Math.floor(4));
}

function getRandomPos() {
  return Math.floor(Math.random() * Math.floor(100))
}

var templates = Array(myModal0, myModal1, myModal2, myModal3, myModal4, myModal5, myModal6, myModal7, myModal8, myModal9, myModal10)
let elem = document.createElement('div')
var item = templates[Math.floor(Math.random() * templates.length)]
elem.append(item.content.cloneNode(true))
elem.style.position = 'absolute'
elem.style.top = getRandomPos() + 'vh'
elem.style.left = getRandomPos() + 'vw'
document.body.append(elem)
setInterval(function() {
  let elem = document.createElement('div')
  var item = templates[Math.floor(Math.random() * templates.length)]
  elem.append(item.content.cloneNode(true))
  elem.style.position = 'absolute'
  elem.style.top = getRandomPos() + 'vh'
  elem.style.left = getRandomPos() + 'vw'
  document.body.append(elem)
}, 1)