function CarController() {
  let carService = new CarService();

  this.setup = function() {
    let template = `
         
 <div class="container">
        <form onsubmit="app.controllers.carController.makeCar(event)">
            <div class="form-row pt-4 pb-9">

             <div class="form-group col-md-3">
                    <label for="imgUrl">Image Url</label>
                    <input type="text" class="form-control" name="imgUrl" placeholder="Image Url">
                </div>
                <div class="form-group col-md-3">
                    <label for="make">Make</label>
                    <input type="text" class="form-control" name="make" placeholder="Make">
                </div>
                <div class="form-group col-md-3">
                    <label for="model">Model</label>
                    <input type="text" class="form-control" name="model" placeholder="Model">
                </div>        
                <div class="form-group col-md-3">
                    <label for="year">Year</label>
                    <input type="number" class="form-control" name="year" placeholder="Year">
                </div>

                <div class="form-group col-md-3">
                    <label for="price">Price</label>
                    <input type="number" class="form-control" name="price" placeholder="Price">
                </div>
                <div class="form-group col-md-3">
                    <label for="description">Description</label>
                    <input type="text" class="form-control" name="description" placeholder="description">
                </div>
            </div>
      
        
            <button type="submit" class="btn btn-primary">Make Car</button>
        </form >
        <div id="cars" class="row"></div>
    </div>
    `;
    document.getElementById("maker").innerHTML = template;
    carService.loadCars(draw);
  };

  function draw() {
    let cars = carService.getCars();
    let template = "";

    for (let i = 0; i < cars.length; i++) {
      const car = cars[i];
      template += `
        <div class="col-3">
        <img src="${car.imgUrl}"></img>
            <p>Make: ${car.make}</p>
            <p>Model: ${car.model}</p>
            <p>Year: ${car.year}</p>
            <p>Price: ${car.price}</p>
            <p>Desc. ${car.description}</p>
        </div>  
      `;
    }
    document.getElementById("cars").innerHTML = template;
  }

  this.makeCar = function(event) {
    event.preventDefault();
    let formData = event.target;
    carService.makeCar(formData, draw);
    // formData.make.value = "";
    // formData.model.value = "";
    // formData.imgUrl.value = "";
    // formData.price.value = "";
    // formData.year.value = "";
    // formData.description.value = "";
    formData.reset();
  };
}
