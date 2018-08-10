function CarService() {
  let carService = this;

  let cars = [];

  // cars.push(
  //   new Car(
  //     "Ford",
  //     "F150",
  //     "/assets/Photos/cq5dam.web.1280.1280.jpg",
  //     2019,
  //     30000,
  //     "A Truck for hauling your friends stuff"
  //   )
  // );

  function Car(make, model, imgUrl, year, price, description) {
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

  this.loadCars = function(draw) {
    $.get("https://bcw-gregslist.herokuapp.com/api/cars").then(res => {
      cars = res.data;
      draw();
    });
  };

  this.makeCar = function(data, draw) {
    let newCar = new Car(
      data.make.value,
      data.model.value,
      data.imgUrl.value,
      data.year.value,
      data.price.value,
      data.description.value
    );
    $.post("https://bcw-gregslist.herokuapp.com/api/cars", newCar).then(res => {
      console.log(res);
      carService.loadCars(draw);
    });
  };
}
