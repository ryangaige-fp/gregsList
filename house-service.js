function HouseService() {
  let houses = [];

  houses.push(
    new House(
      4,
      2,
      "/assets/Photos/cq5dam.web.1280.1280.jpg",
      2,
      2018,
      200000,
      "huge house tiny rooms"
    )
  );

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

  this.getHouse = function() {
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

  this.makeHouse = function(data) {
    houses.push(
      new HouseService(
        data.bedrooms.value,
        data.bathrooms.value,
        data.imgUrl.value,
        data.levels.value,
        data.year.value,
        data.price.value,
        data.description.value
      )
    );
  };
}
