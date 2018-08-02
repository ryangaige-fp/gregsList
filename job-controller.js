function JobController() {
  let jobService = new JobService();

  this.setup = function() {
    let template = `
     <form onsubmit="app.controllers.jobController.makeJob(event)">
        <label for="company">Company</label>
        <input type="text" name="company">
        <label for="jobTitle">Job Title</label>
        <input type="text" name="jobTitle">        
        <label for="hours">Hours</label>
        <input type="number" name="hours">
        <label for="rate">Rate</label>
        <input type="number" name="rate">
        <label for="description">Description</label>
        <input type="text" name="description">
        <button type="submit">Search Job</button>
    </form>
        <div id="jobs" class="row"></div>
    `;
    document.getElementById("maker").innerHTML = template;
    draw();
  };

  function draw() {
    jobService.getjobs = jobService.getJobs();
    let template = "";

    for (let i = 0; i < job.length; i++) {
      const job = job[i];
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
}
