import type { Job } from "../../types/job";
import "./JobCard.css";
import { Link } from "react-router-dom";

interface JobCardProps {
  job: Job;
}

function JobCard({ job }: JobCardProps) {
  return (
    <article className="job-card">
      <div className="job-info">
        <h2>{job.jobTitle}</h2>
        <p>{job.companyName}</p>
        <p>{job.jobGeo}</p>
        <p>{job.jobLevel}</p>
      </div>
      <Link to={`/vaga/${job.id}`} className="job-link">
        Ver vaga
      </Link>
    </article>
  );
}

export default JobCard;
