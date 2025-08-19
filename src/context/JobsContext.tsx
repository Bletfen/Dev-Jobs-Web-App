import { createContext, useContext, useState, type ReactNode } from "react";
import data from "../../data.json";
interface IJobsContext {
  jobs: IJobs[];
  setJobs: React.Dispatch<React.SetStateAction<IJobs[]>>;
}
interface IShowFilterContext {
  showFilter: boolean;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IMainFilterContext {
  mainFilter: Partial<IJobs>;
  setMainFilter: React.Dispatch<React.SetStateAction<Partial<IJobs>>>;
}

interface IPopUpFilterContext {
  popUpFilter: Partial<IJobs>;
  setPopUpFilter: React.Dispatch<React.SetStateAction<Partial<IJobs>>>;
}

const JobsContext = createContext<IJobsContext | undefined>(undefined);
const ShowFilterContext = createContext<IShowFilterContext | undefined>(
  undefined
);
const MainFilterContext = createContext<IMainFilterContext | undefined>(
  undefined
);
const PopUpFilterContext = createContext<IPopUpFilterContext | undefined>(
  undefined
);

export default function JobsProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState<IJobs[]>(data);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [mainFilter, setMainFilter] = useState<Partial<IJobs>>({
    position: "",
    company: "",
  });
  const [popUpFilter, setPopUpFilter] = useState<Partial<IJobs>>({
    contract: "",
    location: "",
  });
  return (
    <JobsContext.Provider value={{ jobs, setJobs }}>
      <ShowFilterContext.Provider value={{ showFilter, setShowFilter }}>
        <MainFilterContext.Provider value={{ mainFilter, setMainFilter }}>
          <PopUpFilterContext value={{ popUpFilter, setPopUpFilter }}>
            {children}
          </PopUpFilterContext>
        </MainFilterContext.Provider>
      </ShowFilterContext.Provider>
    </JobsContext.Provider>
  );
}

export const useJobsContext = () => {
  const context = useContext(JobsContext);
  if (!context) {
    throw new Error("useJobsContext must be within an JobsProvider");
  }
  return context;
};

export const useShowFilterContext = () => {
  const context = useContext(ShowFilterContext);
  if (!context) {
    throw new Error("ShowFilterContext must be within an JobsProvider");
  }
  return context;
};

export const useMainFilterContext = () => {
  const context = useContext(MainFilterContext);
  if (!context) {
    throw new Error("MainFilterContext must be within an JobsProvider");
  }
  return context;
};

export const usePopUpFilterContext = () => {
  const context = useContext(PopUpFilterContext);
  if (!context) {
    throw new Error("PopUpFilterContext must be within an JobsProvider");
  }
  return context;
};
