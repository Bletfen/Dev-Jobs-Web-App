import { createContext, useContext, useState, type ReactNode } from "react";
import data from "../../data.json";
interface IJobsContext {
  jobs: IJobs[];
  setJobs: React.Dispatch<React.SetStateAction<IJobs[]>>;
}
const JobsContext = createContext<IJobsContext>({
  jobs: [],
  setJobs: () => {},
});
export default function JobsProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState<IJobs[]>(data);
  return (
    <JobsContext.Provider value={{ jobs, setJobs }}>
      {children}
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
