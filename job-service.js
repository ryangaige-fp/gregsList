function JobService() {
  let jobs = [];

  jobs.push(
    new Job(
      "fencepencil",
      "Sr. Developer",
      40,
      170000,
      "fun place to work with awesome benefits"
    )
  );

  function Job(company, jobTitle, hours, rate, description) {
    this.company = company;
    this.jobTitle = jobTitle;
    this.hours = hours;
    this.rate = rate;
    this.description = description;
  }

  this.getJobs = function() {
    let jobsCopy = [];

    for (let i = 0; i < jobs.length; i++) {
      const job = jobs[i];

      let jobCopy = new Job(
        job.company,
        job.jobTitle,
        job.hours,
        job.rate,
        job.description
      );
      jobsCopy.push(jobCopy);
    }
    return jobsCopy;
  };

  this.makeJob = function(data) {
    jobs.push(
      new JobService(
        data.company.value,
        data.jobTitle.value,
        data.hours.value,
        data.rate.value,
        data.description.value
      )
    );
  };
}
