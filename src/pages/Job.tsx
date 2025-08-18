import useGetJobs from "../customHooks/GetContext";
export default function Job() {
  const job = useGetJobs();
  console.log(job);

  return (
    <div
      className="bg-[#f4f6f8]
      min-h-screen
      "
    >
      <div className="px-[2.4rem]">
        <div
          className="relative flex flex-col
          items-center gap-[2.4rem]
          bg-white pb-[3.2rem]
          -top-10 rounded-[0.6rem]
          pt-[4.9rem]
        "
        >
          <div
            style={{ backgroundColor: job?.logoBackground }}
            className="w-[5rem] h-[5rem]
            rounded-[1.5rem]
            flex items-center justify-center
            absolute
            -top-10"
          >
            <img src={job?.logo} alt="company-logo" />
          </div>
          <div
            className="flex flex-col
            items-center gap-[1.3rem]
            mt-["
          >
            <h3
              className="text-[#19202d] text-[2rem]
              font-[700]"
            >
              {job?.company}
            </h3>
            <span
              className="text-[#6e8098]
              text-[1.6rem]"
            >
              {job?.website}
            </span>
          </div>
          <a
            href={job?.website}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "rgba(rgba(89, 100, 224, 1))" }}
            className="rounded-[0.5rem]
            text-[1.6rem] font-bold py-[1.6rem] px-[2rem]
            text-[#5964e0]"
          >
            Company Site
          </a>
        </div>
      </div>

      <div className="px-[2.4rem]">
        <div
          className="flex flex-col
          px-[2.4rem] py-[4rem]
          bg-white rounded-[0.6rem]
          mb-[8.9rem]"
        >
          <div
            className="flex flex-col
            mb-[5.4rem]"
          >
            <p
              className="flex
              items-center gap-[1.2rem]
              text-[#6e8098]
              text-[1.6rem]"
            >
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
            <h4 className="text-[#19202d] text-[2rem] font-bold">
              {job?.position}
            </h4>
            <span
              className="text-[#5963e0]
              text-[1.4rem] font-bold"
            >
              {job?.location}
            </span>
          </div>
          <a
            href={job?.apply}
            target="_blank"
            rel="noopener noreferrer"
            className="py-[1.6rem] text-white text-[1.6rem] font-bold
              rounded-[0.5rem] bg-[#5964e0] text-center
              mb-[3.2rem]"
          >
            Apply now
          </a>
          <div
            className="text-[1.6rem] leading-[2.6rem] text-[#6e8098]
            mb-[4rem]"
          >
            <p>{job?.description}</p>
          </div>
          <div>
            <h5
              className="text-[#19202d] text-[2rem] font-bold
              mb-[2.8rem]"
            >
              Requirements
            </h5>
            <p
              className="text-[1.6rem] leading-[2.6rem] text-[#6e8098]
              mb-[3.2rem]"
            >
              {job?.requirements.content}
            </p>
            <ul
              className="flex
              flex-col gap-[0.8rem] mb-[4rem]
              "
            >
              {job?.requirements.items?.map((item: string, index: number) => (
                <li
                  key={index}
                  className="flex gap-[3.2rem]
                  text-[1.6rem] leading-[2.6rem] text-[#6e8098]
                  "
                >
                  <svg
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 relative
                    top-4"
                  >
                    <circle cx="2" cy="2" r="2" fill="#5964E0" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6
              className="text-[#19202d] text-[2rem] font-bold
              mb-[2.8rem]"
            >
              What You Will Do
            </h6>
            <p
              className="text-[1.6rem] leading-[2.6rem] text-[#6e8098]
              mb-[3.2rem]"
            >
              {job?.role.content}
            </p>
            <ol
              className="flex flex-col
              gap-[0.8rem] mb-["
            >
              {job?.role.items.map((item, index) => (
                <li className="flex gap-[2.8rem]">
                  <span
                    className="text-[1.6rem] font-bold leading-[2.6rem]
                    text-[#5964e0]"
                  >
                    {index + 1}
                  </span>
                  <p className="text-[1.6rem] leading-[2.6rem] text-[#6e8098]">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div
        className="flex bg-white
        px-[2.4rem] pt-[2.5rem] pb-[2.3rem]
        rounded-t-[0.6rem]  "
      >
        <a
          href={job?.apply}
          target="_blank"
          rel="noopener noreferrer"
          className="py-[1.6rem] text-white text-[1.6rem] font-bold
              rounded-[0.5rem] bg-[#5964e0] text-center
              w-full"
        >
          Apply now
        </a>
      </div>
    </div>
  );
}
