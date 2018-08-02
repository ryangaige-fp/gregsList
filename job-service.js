function JobService() {
  let jobs = [];

  function job(company, jobTitle, hours, rate, description) {
    this.company = company;
    this.jobTitle = jobTitle;
    this.hours = hours;
    this.rate = rate;
    this.description = description;
  }

  this.getjobs = function() {
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
  };
  return jobsCopy;
}
