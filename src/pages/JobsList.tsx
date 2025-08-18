import { useState, useRef } from "react";
import Filter from "../components/Filter.tsx";
import FilterPopUp from "../components/FilterPopUp.tsx";
import { Link } from "react-router-dom";
import { useJobsContext } from "../context/JobsContext.tsx";
export default function JobsList() {
  const { jobs } = useJobsContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [mainFilter, setMainFilter] = useState<Partial<IJobs>>({
    position: "",
  });
  const [popUpFilter, setPopUpFilter] = useState<Partial<IJobs>>({
    contract: "",
    location: "",
  });

  const mainSearch = jobs.filter(
    (job) =>
      !mainFilter.position ||
      job.position.toLowerCase().includes(mainFilter.position.toLowerCase())
  );

  const filteredJobs = mainSearch.filter((job) => {
    const matchesLocation =
      !popUpFilter.location ||
      job.location.toLowerCase().includes(popUpFilter.location.toLowerCase());

    const matchesContract =
      !popUpFilter.contract || job.contract.toLowerCase() === "full time";
    return matchesLocation && matchesContract;
  });

  return (
    <div
      className="px-[2.4rem]
        bg-[#f4f6f8]"
    >
      <Filter
        setShowFilter={setShowFilter}
        setMainFilter={setMainFilter}
        inputRef={inputRef}
      />
      <div
        className="flex flex-col
        gap-[4.9rem]"
      >
        {filteredJobs.map((job) => (
          <Link
            to={String(job.id)}
            key={job.id}
            className="px-[3.2rem] pt-[4.9rem] pb-[3.2rem]
            bg-white rounded-[0.6rem]
            relative"
          >
            <div
              className={`w-[5rem] h-[5rem]
                flex items-center justify-center
                rounded-[1.5rem]
                absolute -top-10`}
              style={{ backgroundColor: job.logoBackground }}
            >
              <img src={job.logo} alt="logo" />
            </div>
            <div
              className="flex
                flex-col gap-[1.6rem]"
            >
              <p
                className="flex
                text-[1.6rem] text-[#6e8098]
                gap-[1.2rem]"
              >
                <span>{job.postedAt}</span>
                <svg
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="place-self-center"
                >
                  <circle cx="2" cy="2" r="2" fill="#6E8098" />
                </svg>
                <span>{job.contract}</span>
              </p>
              <h2 className="text-[2rem] font-[700] text-[#19202d]">
                {job.position}
              </h2>
              <span
                className="flex
                text-[1.6rem] text-[#6e8098]
                "
              >
                {job.company}
              </span>
            </div>
            <div
              className="text-[1.4rem] font-[700] text-[#5964e0]
                mt-[4.4rem]"
            >
              <span>{job.location}</span>
            </div>
          </Link>
        ))}
      </div>
      <button>Load More</button>
      <FilterPopUp
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        setPopUpFilter={setPopUpFilter}
      />
    </div>
  );
}
