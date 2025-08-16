import Filter from "../components/Filter.tsx";
import dataBase from "../../data.json";
export default function JobsList() {
  return (
    <div className="px-[2.4rem]">
      <Filter />
      {dataBase.map((job) => (
        <div>
          <div>
            <img src={job.logo} alt="logo" />
          </div>
          <div>
            <p className="flex">
              <span>{job.postedAt}</span>
              <svg
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="place-self-end"
              >
                <circle cx="2" cy="2" r="2" fill="#6E8098" />
              </svg>
              <span>{job.contract}</span>
            </p>
            <h2>{job.position}</h2>
            <span>{job.company}</span>
          </div>
          <div>
            <span>{job.location}</span>
          </div>
        </div>
      ))}
      <button>Load More</button>
    </div>
  );
}
