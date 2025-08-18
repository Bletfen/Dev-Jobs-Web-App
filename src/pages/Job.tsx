import { useParams } from "react-router-dom";
import dataBase from "../../data.json";
export default function Job() {
  const { jobId } = useParams();
  const filteredJob = dataBase.filter((job) => {
    job.position === jobId;
  });
  console.log(filteredJob);
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
