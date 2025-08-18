import useGetJobs from "../customHooks/GetContext";
import { Link } from "react-router-dom";
export default function Job() {
  const job = useGetJobs();
  console.log(job);

  return (
    <div>
      <div>
        <div
          style={{ backgroundColor: job?.logoBackground }}
          className="w-[5rem] h-[5rem]
          rounded-[1.5rem]
          flex items-center justify-center"
        >
          <img src={job?.logo} alt="company-logo" />
        </div>
        <div>
          <h3>{job?.company}</h3>
          <span>{job?.website}</span>
        </div>
        <a href={job?.website} target="_blank" rel="noopener noreferrer">
          Company Site
        </a>
      </div>

      <div>
        <div>
          <p>
            <span>{job?.postedAt}</span>
            <svg
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="#6E8098" />
            </svg>
            <span>{job?.contract}</span>
          </p>
          <h4>{job?.position}</h4>
          <span>{job?.location}</span>
        </div>
        <div>
          <a href={job?.apply} target="_blank" rel="noopener noreferrer">
            Apply now
          </a>
        </div>
        <div>
          <p>{job?.description}</p>
        </div>
        <div>
          <h5>Requirements</h5>
          <p>{job?.requirements.content}</p>
          <ul>
            {job?.requirements.items.map((item: string) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h6>What You Will Do</h6>
          <p>{job?.role.content}</p>
          <ol>
            {job?.role.items.map((item) => (
              <li>{item}</li>
            ))}
          </ol>
        </div>
      </div>
      <a href={job?.website} target="_blank" rel="noopener noreferrer">
        Apply Now
      </a>
    </div>
  );
}
