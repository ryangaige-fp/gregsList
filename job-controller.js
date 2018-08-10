function JobController() {
  let jobService = new JobService();

  this.setup = function() {
    let template = `
    <div class="container">
     <form onsubmit="app.controllers.jobController.makeJob(event)">
        <div class="form-row pt-4 pb-4">

          <div class="form-group col-md-3">
            <label for="company">Company</label>
            <input type="text" class="form-control" name="company" placeholder="company">
            </div>
        <div class="form-group col-md-3">
            <label for="jobTitle">Job Title</label>
            <input type="text" class="form-control" name="jobTitle" placeholder="title" >        
        </div>

        <div class="form-group col-md-3">
            <label for="hours">Hours</label>     
            <input type="number" class="form-control" name="hours" placeholder="hours">
        </div>

     <div class="form-group col-md-3">
          <label for="rate">Rate</label>
          <input type="number" class="form-control" name="rate" placeholder="rate">
        </div>
               
        <div class="form-group col-md-3">
        <label for="description">Description</label>
        <input type="text" class="form-control" name="description" placeholder="description">
        </div>
        </div>

        <button type="submit">Search Job</button>
    </form>
        <div id="jobs" class="row"></div>
  </div>
    `;
    document.getElementById("maker").innerHTML = template;
    jobService.loadJobs(draw);
  };

  function draw() {
    let jobs = jobService.getJobs();
    let template = "";

    for (let i = 0; i < jobs.length; i++) {
      const job = jobs[i];
      template += `
      <div class="col-3">
        <p>${job.company}</p>
        <p>${job.jobTitle}</p>
        <p>${job.hours}</p> 
        <p>${job.rate}</p>
        <p>${job.description}</p>
</div>  

      `;
    }
    document.getElementById("jobs").innerHTML = template;
  }
  this.makeJob = function(event) {
    event.preventDefault();
    let formData = event.target;
    jobService.makeJob(formData, draw);
    // formData.company.value = "";
    // formData.jobTitle.value = "";
    // formData.hours.value = "";
    // formData.rate.value = "";
    // formData.description.value = "";
    formData.reset();
  };
}
