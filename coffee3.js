// Function to fetch and display hot coffee data
function fetchHotCoffee() {
  return fetch("https://api.sampleapis.com/coffee/hot")
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Failed to pull coffeeAPI data")
      }
    })
    .then((data) => {
      //console.log(data)
      const firstThreeCoffees = data.slice(1, 6)
      const hotCoffeeContainer = document.getElementById("hot-coffee-data")
      hotCoffeeContainer.innerHTML = "" // Clear previous content

      firstThreeCoffees.forEach((coffee) => {
        const markUp = `<li class="drink-item">
        <img src="${coffee.image}" alt="${coffee.title}" class="drink-image">
         <span class="drink-name">${coffee.title}</span>
         </li>`
        hotCoffeeContainer.insertAdjacentHTML("beforeend", markUp)
      })
    })
    .catch((error) => {
      console.error("Hot coffee error:", error)
    })
}
//originally there was no data at the iced coffee endpoint but they updated it recently
/*
function fetchIcedCoffee() {
  return fetch("https://api.sampleapis.com/coffee/iced")
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Failed to pull coffeeAPI data")
      }
    })
    .then((data) => {
      console.log("Technically,There is no data at the iced endpoint")

      /*  data.forEach((coffee) => {
        const markUp = `<li>${coffee.error}</li>`
        document
          .getElementById("iced-coffee-data")
          .insertAdjacentHTML("beforeend", markUp)
      })
    })
    .catch((error) => {
      console.error("Iced coffee error (original):", error)
    })
}
    */

// Function to fetch and display iced coffee data (same as above but api url points to iced)
function fetchIcedCoffee() {
  return fetch("https://api.sampleapis.com/coffee/iced")
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Failed to pull coffeeAPI data")
      }
    })
    .then((data) => {
      const lastThreeCoffees = data.slice(1, 6)
      const icedCoffeeContainer = document.getElementById("iced-coffee-data")
      icedCoffeeContainer.innerHTML = "" // Clear previous content

      lastThreeCoffees.forEach((coffee) => {
        const markUp = `<li class="drink-item">
        <img src="${coffee.image}" alt="${coffee.title}" class="drink-image">
        <span class="drink-name">${coffee.title}</span>
        </li>`
        icedCoffeeContainer.insertAdjacentHTML("beforeend", markUp)
      })
    })
    .catch((error) => {
      console.error("Iced coffee error:", error)
    })
}

// Function to display all drinks
function displayAllDrinks() {
  Promise.all([fetchHotCoffee(), fetchIcedCoffee()])
    .then(() => {
      document.getElementById("HD").style.display = "block"
      document.getElementById("ID").style.display = "block"
    })
    .catch((error) => {
      console.error("Error displaying all drinks:", error)
    })
}

// Add click event listeners to the navigation links

document.addEventListener("DOMContentLoaded", function () {
  const allDrinksLink = document.querySelector('a[href="#all-drinks"]')
  const hotDrinksLink = document.querySelector('a[href="#hot-coffee-data"]')
  const icedDrinksLink = document.querySelector('a[href="#iced-coffee-data"]')

  if (hotDrinksLink) {
    hotDrinksLink.addEventListener("click", function (e) {
      e.preventDefault()
      fetchHotCoffee().then(() => {
        document.getElementById("HD").style.display = "block"
        document.getElementById("ID").style.display = "none"
      })
    })
  }

  if (icedDrinksLink) {
    icedDrinksLink.addEventListener("click", function (e) {
      e.preventDefault()
      Promise.all([fetchIcedCoffee()]).then(() => {
        document.getElementById("HD").style.display = "none"
        document.getElementById("ID").style.display = "block"
      })
    })
  }

  // Initially load all drinks
  displayAllDrinks()
})
