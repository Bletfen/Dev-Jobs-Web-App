import { useParams } from "react-router-dom";
import { useJobsContext } from "../context/JobsContext";

export default function useGetJobs(): IJobs | undefined {
  const { jobs } = useJobsContext();
  const { id } = useParams<{ id: string }>();
  const job = jobs.find((job) => String(job.id) === id);
  return job;
}
