import { useState, useRef } from "react";
import Filter from "../components/Filter.tsx";
import dataBase from "../../data.json";
import FilterPopUp from "../components/FilterPopUp.tsx";
import type { MainFilterState, PopUpFilterState } from "../../types.d.ts";
export default function JobsList() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [mainFilter, setMainFilter] = useState<MainFilterState>({
    position: "",
  });
  const [popUpFilter, setPopUpFilter] = useState<PopUpFilterState>({
    fullTime: false,
    location: "",
  });

  const mainSearch = dataBase.filter(
    (job) =>
      mainFilter.position === "" ||
      job.position.toLowerCase().includes(mainFilter.position.toLowerCase())
  );

  const filteredJobs = mainSearch.filter((job) => {
    const matchesLocation =
      popUpFilter.location === "" ||
      job.location.toLowerCase().includes(popUpFilter.location.toLowerCase());

    const matchesContract =
      !popUpFilter.fullTime || job.contract.toLowerCase() === "full time";
    return matchesLocation && matchesContract;
  });

  return (
    <div className="px-[2.4rem]">
      <Filter
        setShowFilter={setShowFilter}
        setMainFilter={setMainFilter}
        inputRef={inputRef}
      />
      {filteredJobs.map((job) => (
        <div key={job.id}>
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
      <FilterPopUp
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        setPopUpFilter={setPopUpFilter}
        popUpFilter={popUpFilter}
      />
    </div>
  );
}
