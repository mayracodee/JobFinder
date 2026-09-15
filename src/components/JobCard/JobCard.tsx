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
        <h2>{job.name}</h2>
        <p>{job.company.name}</p>
        <p>{job.locations[0].name}</p>
        <p>{job.levels[0].name}</p>
      </div>
      <Link to={`/vaga/${job.id}`} className="job-link">
        Ver vaga
      </Link>
    </article>
  );
}

export default JobCard;
