function HouseService() {
  let house = [];

  function House(
    bedrooms,
    bathrooms,
    imgUrl,
    levels,
    year,
    price,
    description
  ) {
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.imgUrl = imgUrl;
    this.levels = levels;
    this.year = year;
    this.price = price;
    this.description = description;
  }

  this.getHouses = function() {
    let housesCopy = [];

    for (let i = 0; i < houses.length; i++) {
      const house = houses[i];

      let houseCopy = new House(
        house.bedrooms,
        house.bathrooms,
        house.imgUrl,
        house.levels,
        house.year,
        house.price,
        house.description
      );
      housesCopy.push(houseCopy);
    }
    return housesCopy;
  };


this.makeHouse = function (data)
  houses.push (new House)


}
