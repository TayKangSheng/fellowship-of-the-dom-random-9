console.log('Linked.')

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
]

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
]

var lands = ['The Shire', 'Rivendell', 'Mordor']
var body = document.querySelector('body')

// Part 1

function makeMiddleEarth () {
  var middleEarth = document.createElement('section')
  middleEarth.id = 'middle-earth'

  lands.forEach(function (landName) {
    var land = document.createElement('article')
    var h1 = document.createElement('h1')
    h1.textContent = landName

    land.appendChild(h1)
    middleEarth.appendChild(land)
  })

  body.appendChild(middleEarth)
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth()

// Part 2

function makeHobbits () {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  var ul = document.createElement('ul')

  hobbits.forEach(function (hobbitName) {
    var hobbit = document.createElement('li')
    hobbit.textContent = hobbitName
    ul.appendChild(hobbit)
  })
  var theShire = document.querySelector('article')
  ul.id = 'theShire'
  theShire.appendChild(ul)
}
makeHobbits()
// Part 3

function keepItSecretKeepItSafe () {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var ring = document.createElement('div')
  ring.id = 'the-ring'
  ring.setAttribute('class', 'magic-imbued-jewelry')
  ring.addEventListener = ('click', nazgulScreech)
  var frodo = document.querySelector('li')
  frodo.appendChild(ring)
}
keepItSecretKeepItSafe()
// Part 4

function makeBuddies () {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside = document.createElement('aside')
  var ul = document.createElement('ul')
  buddies.forEach(function (name) {
    var li = document.createElement('li')
    li.textContent = name
    ul.appendChild(li)
  })
  aside.appendChild(ul)
  var rivendell = document.getElementsByTagName('article')[1]
  rivendell.id = 'rivendell'
  rivendell.appendChild(aside)
}
makeBuddies()
// Part 5

function beautifulStranger () {
  // change the 'Strider' textnode to 'Aragorn'
  var allChars = document.getElementsByTagName('li')
  // allChars.forEach(function (name) {
  //   if (name.textContent === 'Strider') {
  //     name.textContent = 'Aragorn'
  //   }
  // })
  for (var i = 0; i < allChars.length; i++) {
    if (allChars[i].textContent === 'Strider') {
      allChars[i].textContent = 'Aragorn'
    }
  }
}
beautifulStranger()
// Part 6

function leaveTheShire () {
  // assemble the hobbits and move them to Rivendell
  var hobbitLeavers = document.getElementById('theShire')
  var rivendell = document.getElementById('rivendell')
  rivendell.appendChild(hobbitLeavers)
}
leaveTheShire()
// Part 7

function forgeTheFellowShip () {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var theFellowship = document.createElement('div')
  var allChars = document.getElementsByTagName('li')
  var ul = document.createElement('ul')
  for (var i = 0; i < allChars.length; i) {
    alert(allChars[i].textContent + ' has joined the party')
    ul.appendChild(allChars[i])
  }
  var rivendell = document.getElementById('rivendell')
  theFellowship.appendChild(ul)
  rivendell.appendChild(theFellowship)
}
forgeTheFellowShip()
// Part 8

function theBalrog () {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var allChars = document.getElementsByTagName('li')
  allChars[0].innerHTML = 'Gandalf the White'
  allChars[0].style.backgroundColor = 'white'
  allChars[0].style.border = '4px solid grey'
  allChars[0].style.width = '125px'
  allChars[0].style.padding = '2px'
  allChars[0].style.textAlign = 'center'
}
theBalrog()
// Part 9

function hornOfGondor () {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert('Horn of Gondor has been blown!')
  var allChars = document.getElementsByTagName('li')
  var parent = document.getElementsByTagName('ul')[2]
  for (var i = 0; i < allChars.length; i++) {
    if (allChars[i].textContent === 'Boromir') {
      allChars[i].style.textDecoration = 'line-through'
      alert('Boromir has been killed!')
      parent.removeChild(allChars[i])
    }
  }
}
hornOfGondor()
// Part 10

function itsDangerousToGoAlone () {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var mountDoom = document.createElement('div')
  var ul = document.createElement('ul')
  var allChars = document.getElementsByTagName('li')
  for (var i = 0; i < allChars.length; i++) {
    if (allChars[i].textContent.includes('Frodo')) {
      ul.appendChild(allChars[i])
    }
    if (allChars[i].textContent.includes('Samwise')) {
      ul.appendChild(allChars[i])
    }
  }
  mountDoom.appendChild(ul)
}
itsDangerousToGoAlone()
// Part 11

function weWantsIt () {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}

// Part 12

function thereAndBackAgain () {
  // remove Gollum and the Ring from the document
  // remove all the buddies from the document
  // Move all the hobbits back to the shire
}
