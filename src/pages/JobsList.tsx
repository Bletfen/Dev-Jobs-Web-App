import { useState, useEffect } from "react";
import Filter from "../components/Filter.tsx";
import FilterPopUp from "../components/FilterPopUp.tsx";
import { Link } from "react-router-dom";
import {
  useJobsContext,
  useMainFilterContext,
  usePopUpFilterContext,
} from "../context/JobsContext.tsx";
export default function JobsList() {
  const { jobs } = useJobsContext();
  const { mainFilter } = useMainFilterContext();
  const { popUpFilter } = usePopUpFilterContext();
  const [showMore, setShowMore] = useState<number>(12);

  const mainSearch = jobs.filter((job) => {
    const search = mainFilter.position?.toLowerCase() || "";
    return (
      job.position.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search)
    );
  });

  const filteredJobs = mainSearch.filter((job) => {
    const matchesLocation =
      !popUpFilter.location ||
      job.location.toLowerCase().includes(popUpFilter.location.toLowerCase());

    const matchesContract =
      !popUpFilter.contract || job.contract.toLowerCase() === "full time";
    return matchesLocation && matchesContract;
  });

  useEffect(() => {
    document.title = "Dev Jobs Web App";
  }, []);

  const handleShowMore = () => {
    setShowMore((prev) => (prev >= filteredJobs.length ? 12 : prev + 12));
  };

  return (
    <div
      className="px-[2.4rem]
        bg-[#f4f6f8]
        pb-[6.2rem]
        dark:bg-[#121721]
        transition-all duration-300
        md:px-[3.9rem] min-h-screen
        "
    >
      <Filter />

      <div
        className="flex flex-col
        gap-[4.9rem]
        md:grid md:grid-cols-2
        md:mt-[7rem]
        md:gap-[unset]
        md:gap-x-[1.1rem]
        md:gap-y-[6.5rem]
        xl:grid-cols-3
        xl:gap-x-[3rem]
        max-w-[111rem] mx-auto"
      >
        {filteredJobs.slice(0, showMore).map((job) => (
          <Link
            to={String(job.id)}
            key={job.id}
            className="px-[3.2rem] pt-[4.9rem] pb-[3.2rem]
            bg-white rounded-[0.6rem]
            relative dark:bg-[#19202d]
            transition-all duration-300"
          >
            <div
              className={`w-[5rem] h-[5rem]
                flex items-center justify-center
                rounded-[1.5rem]
                absolute -top-10
                `}
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
              <h2
                className="text-[2rem] font-[700] text-[#19202d]
                dark:text-white
                transition-all duration-300"
              >
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

      {filteredJobs.length > 12 && (
        <button
          className="flex
        w-[14.1rem] mx-auto
        bg-[#5964e0] rounded-[0.5rem]
        pl-[3rem] pr-[2.3rem] py-[1.6rem]
        mt-[3.2rem]
        text-white text-[1.6rem] font-bold
        cursor-pointer
        hover:bg-[#939bf4]
        transition-all duration-300"
          onClick={handleShowMore}
        >
          {showMore >= filteredJobs.length ? "Show Less" : "Show More"}
        </button>
      )}

      <div className="md:hidden">
        <FilterPopUp />
      </div>
    </div>
  );
}
