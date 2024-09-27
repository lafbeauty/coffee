//fetch API to grab the coffee drink names for hot coffee
fetch("https://api.sampleapis.com/coffee/hot")
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

    firstThreeCoffees.forEach((coffee) => {
      const markUp = `<li class = "drink-item">
      <img src="${coffee.image}" alt="${coffee.title}" class="drink-image">
       <span class="drink-name">${coffee.title}</span>
       </li>`

      document
        .getElementById("hot-coffee-data")
        .insertAdjacentHTML("beforeend", markUp)
    })
  })
  .catch((error) => {
    console.error("error:", error)
  })

//fetch API to grab the coffee drink names for iced coffee
fetch("https://api.sampleapis.com/coffee/iced")
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
    })*/
  })
  .catch((error) => {
    console.error("error:", error)
  })

//fetch API to grab the coffee drink names for hot coffee
fetch("https://api.sampleapis.com/coffee/hot")
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error("Failed to pull coffeeAPI data")
    }
  })
  .then((data) => {
    const lastThreeCoffees = data.slice(11, 15)

    lastThreeCoffees.forEach((coffee) => {
      const markUp = `<li class= "drink-item">
      <img src="${coffee.image}" alt="${coffee.title}" class="drink-image">
      <span class="drink-name">${coffee.title}</span>
      </li>`
      document
        .getElementById("iced-coffee-data")
        .insertAdjacentHTML("beforeend", markUp)
    })
  })
  .catch((error) => {
    0, console.error("error:", error)
  })
