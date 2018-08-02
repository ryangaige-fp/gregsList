function CarService() {
  let cars = [];

  cars.push(
    new Car(
      "Ford",
      "F150",
      "https://ford.to/2mBGH2b",
      2019,
      30000,
      "A Truck for hauling your friends stuff"
    )
  );

  function car(make, model, imgUrl, year, price, description) {
    this.make = make;
    this.model = model;
    this.imgUrl = imgUrl;
    this.year = year;
    this.price = price;
    this.description = description;
  }

  this.getCars = function() {
    let carsCopy = [];

    for (let i = 0; i < cars.length; i++) {
      const car = cars[i];

      let carCopy = new Car(
        car.make,
        car.model,
        car.imgUrl,
        car.year,
        car.price,
        car.description
      );
      carsCopy.push(carCopy);
    }
    return carsCopy;
  };

  this.makeCar = function(data) {
    cars.push(
      new CarService(
        data.make.value,
        data.model.value,
        data.imgUrl.value,
        data.year.value,
        data.price.value,
        data.description.value
      )
    );
  };
}
