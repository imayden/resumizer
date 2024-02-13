from pydantic import BaseModel
from jobspy import scrape_jobs
from fastapi import FastAPI
import pandas as pd

app = FastAPI()

class Job(BaseModel):
  job_title: str
  country: str
  location: str = None

@app.post("/jobs/")
async def find_job(job:Job):
  job_title = job.job_title
  country = job.country
  location = job.location

  jobs: pd.DataFrame = scrape_jobs(
      site_name=["indeed", "linkedin", "glassdoor"],
      search_term=job_title,
      location=location,
      results_wanted=10,
      country_indeed=country
  )
  return {
    "job_url": jobs["job_url"].tolist(),
    "site": jobs["site"].tolist(),
    "title": jobs["title"].tolist(),
    "company": jobs["company"].tolist(),
    "location": jobs["location"].tolist(),
    "date_posted": jobs["date_posted"].tolist(),
  }
