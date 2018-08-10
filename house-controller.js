function HouseController() {
  let houseService = new HouseService();

  this.setup = function() {
    let template = `
 <div class="container">
        <form onsubmit="app.controllers.houseController.makeHouse(event)">
            <div class="form-row pt-4 pb-4">
                <div class="form-group col-md-3">
                    <label for="bedrooms">Bedrooms</label>
                    <input type="number" class="form-control" name="bedrooms" placeholder="# of Bedrooms">
                </div>
                <div class="form-group col-md-3">
                    <label for="bathoroms">Bathrooms</label>
                    <input type="number" class="form-control" name="bathrooms" placeholder="# of Bathrooms">
                </div>

                <div class="form-group col-md-3">
                    <label for="imgUrl ">Image</label>
                    <input type="text " class="form-control " name="imgUrl" placeholder="image url ">
                </div>
                <div class="form-group col-md-3 ">
                    <label for="levels">Levels</label>
                    <input type="number" class="form-control" name="levels" placeholder="# of levels">
                </div>

                <div class="form-group col-md-3">
                    <label for="year">Year Built</label>
                    <input type="number" class="form-control" name="year" placeholder="year built">
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

                <button type="submit" class="btn btn-primary">Make House</button>
        </form>

        <div id="houses" class="row"></div>
</div>

`;
    document.getElementById("maker").innerHTML = template;
    houseService.loadHouses(draw);
  };

  function draw() {
    let houses = houseService.getHouse();
    let template = "";

    for (let i = 0; i < houses.length; i++) {
      const house = houses[i];

      template += `
      <div class="col-3">
      <img src="${house.imgUrl}"></img> 
        <p>Bedrooms: ${house.bedrooms}</p>
        <p>Bathrooms: ${house.bathrooms}</p>
        <p>Levels: ${house.levels}</p>
        <p>Year: ${house.year}</p>
        <p>Price: ${house.price}</p>
        <p>Desc: ${house.description}</p>
        </div>  
      `;
    }
    document.getElementById("houses").innerHTML = template;
  }

  this.makeHouse = function(event) {
    event.preventDefault();
    let formData = event.target;
    houseService.makeHouse(formData, draw);
    // formData.bedrooms.value = "";
    // formData.bathrooms.value = "";
    // formData.imgUrl.value = "";
    // formData.levels.value = "";
    // formData.year.value = "";
    // formData.price.value = "";
    // formData.description.value = "";
    formData.reset();
  };
}
