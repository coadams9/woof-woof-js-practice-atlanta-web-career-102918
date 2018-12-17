// 1.  display all the names at the top(header or dog-bar)
//     a.  make a fetch to get all the pup objects
// 2.  Need a event handler/listener for each span

document.addEventListener("DOMContentLoaded", initPage)

// define initPage - tells page what to do as soon as it loads

function initPage () {
  getDogs()
}

function getDogs(){
  const dogURL = "http://localhost:3000/pups"
  fetch(dogURL).then(function(response) {
    let myJson = response.json()
    return myJson
  })
  .then(printName)
}

function printName(myJson){
  myJson.forEach(function(dog){
    addDog(dog)
  })
}

function addDog(individual){
  let bar = document.getElementById("dog-bar")
  let doggie = document.createElement("span")

  doggie.dataset.name = individual.name
  doggie.dataset.image = individual.image
  doggie.dataset.isGoodDog = individual.isGoodDog
  doggie.dataset.id = individual.id

  doggie.innerText += doggie.dataset.name

  bar.appendChild(doggie)
  doggie.addEventListener('click', showDog)
}

function showDog(event) {
  let dogContainer = document.querySelector("#dog-info")
  let dogStatus = ""
  if (event.target.dataset.isGoodDog === "true") {
    dogStatus = 'Good Dog!'
  } else {
    dogStatus = 'Bad Dog!'
  }
  var dogHtml =
      `<img src="${event.target.dataset.image}"/>
      <h2 class="center-text">${event.target.dataset.name}</h2>
      <button>${dogStatus}</button>`
  dogContainer.innerHTML = dogHtml
  dogContainer.dataset.id = event.target.dataset.id
  myButton = document.querySelector("#dog-info button")
  myButton.addEventListener('click', switchStatus)
}

function switchStatus(event){
  // document.querySelector("dog-info")
  // doggie = document.querySelector("#dog-info")
  allDogs = document.querySelectorAll("#dog-bar span")
  doggie = ""
  allDogs.forEach(function(dog) {
    if (dog.dataset.id === event.target.parentNode.dataset.id) {
      doggie = dog
      return dog
    }

  debugger
  })
  // if (event.target.innerText === "Good Dog!") {
  //   event.target.innerText = "Bad Dog!"
  // } else {
  //   event.target.innerText = "Good Dog!"
  // }
}
