function getFirstSelector(selector) {
return document.querySelector(selector)
}





function nestedTarget() {
return document.querySelector('div#nested div div div div')
}





function increaseRankBy(n) {
var ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li')
for (var i = 0; i<ranks.length; i++) {
  ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
}
}





function deepestChild() {
     var cur = document.getElementById('grand-node')
    var i = 0
    while (cur.firstElementChild) {
      i = i + 1
      cur = cur.firstElementChild
    }
    return cur
}


function criteriaFN(criteria) {
  if (criteria == "target") {
    return true
  }
  else {
    return false
  }
}

function find(array,criteriaFN) {
  let current = array
  let next = []
  while (current) {
    if (criteriaFN(current)){
      return current
    }
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
      next.push(current[i])
      }
    }
    current =next.shift()
  }
  return null
}
