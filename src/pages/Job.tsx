import { useParams } from "react-router-dom";
import dataBase from "../../data.json";
// import { useEffect } from "react";
export default function Job() {
  const { jobId } = useParams();
  const filteredJob = dataBase.filter((job) => {
    job.position === jobId;
  });
  console.log(filteredJob);
  // useEffect(() => {
  //   document.documentElement.title(`${filteredJob}`);
  // });
  return (
    <div>
      <div>
        <div>
          <img src={filteredJob.logo} alt="" />
        </div>
      </div>
    </div>
  );
}
