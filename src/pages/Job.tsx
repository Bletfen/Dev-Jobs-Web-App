import useGetJobs from "../customHooks/GetContext";
export default function Job() {
  const job = useGetJobs();
  console.log(job);

  return (
    <div
      className="bg-[#f4f6f8]
      min-h-screen
      dark:bg-[#121721] transition-all duration-300
      "
    >
      <div
        className="px-[2.4rem]
      "
      >
        <div
          className="relative flex flex-col
          items-center gap-[2.4rem]
          bg-white pb-[3.2rem]
          -top-10 rounded-[0.6rem]
          pt-[4.9rem] dark:bg-[#19202d] transition-all duration-300
          md:flex-row md:p-[unset] md:pr-[4rem]
          max-w-[73rem] md:mx-auto
        "
        >
          <div
            style={{ backgroundColor: job?.logoBackground }}
            className="w-[5rem] h-[5rem]
            rounded-[1.5rem]
            flex items-center justify-center
            absolute
            -top-10 md:static md:w-[14rem] md:h-[14rem]
            md:rounded-[0rem] md:rounded-bl-[0.6rem]
            md:mr-[4rem]"
          >
            <img src={job?.logo} alt="company-logo" />
          </div>
          <div
            className="flex flex-col
            items-center gap-[1.3rem]
            md:items-start"
          >
            <h3
              className="text-[#19202d] text-[2rem]
              font-[700] dark:text-white
              transition-all duration-300
              md:text-[2.4rem]"
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
            className="rounded-[0.5rem]
            text-[1.6rem] font-bold py-[1.6rem] 
            px-[2rem] bg-blue-500/10 dark:bg-white/10
            dark:text-white
            text-[#5964e0]
            transition-all duration-300
            md:ml-auto hover:bg-blue-500/35 hover:dark:bg-white/25
            "
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
          mb-[8.9rem]
          dark:bg-[#19202d] transition-all duration-300
          max-w-[73rem] md:mx-auto"
        >
          <div
            className="flex flex-col
            gap-[5.4rem] md:flex-row
            md:items-center"
          >
            <div
              className="md:flex md:flex-col
              md:gap-[0.8rem] md:mb-[4.4rem]"
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
              <h4
                className="text-[#19202d] text-[2rem] font-bold
                dark:text-white
                transition-all duration-300 md:text-[2.8rem]"
              >
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
              mb-[3.2rem] md:ml-auto md:px-[2.85rem]
              hover:bg-[#939bf4]
              trasition-all duration-300"
            >
              Apply now
            </a>
          </div>

          <div
            className="text-[1.6rem] leading-[2.6rem] text-[#6e8098]
              mb-[4rem] dark:text-[#9daec2]
              transition-all duration-300"
          >
            <p>{job?.description}</p>
          </div>
          <div>
            <h5
              className="text-[#19202d] text-[2rem] font-bold
              mb-[2.8rem]
              dark:text-white
              transition-all duration-300"
            >
              Requirements
            </h5>
            <p
              className="text-[1.6rem] leading-[2.6rem] text-[#6e8098]
              mb-[3.2rem]
              dark:text-[#9daec2]
              transition-all duration-300"
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
                  dark:text-[#9daec2]
                  transition-all duration-300
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
              mb-[2.8rem]
              dark:text-white
              transition-all duration-300"
            >
              What You Will Do
            </h6>
            <p
              className="text-[1.6rem] leading-[2.6rem] text-[#6e8098]
              mb-[3.2rem]
              dark:text-[#9daec2]
              transition-all duration-300"
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
                  <p
                    className="text-[1.6rem] 
                    leading-[2.6rem] text-[#6e8098]
                    dark:text-[#9daec2]
                    transition-all duration-300"
                  >
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div
        className="bg-white
        px-[2.4rem] pt-[2.5rem] pb-[2.3rem]
        rounded-t-[0.6rem]
        dark:bg-[#19202d] transition-all duration-300"
      >
        <div
          className="max-w-[73rem] mx-auto
          flex justify-between items-center"
        >
          <div className="hidden md:flex flex-col gap-[1.2rem]">
            <p
              className="text-[#19202d] text-[2rem] font-bold
              dark:text-white"
            >
              {job?.position}
            </p>
            <span className="text-[1.6rem] text-[#6e8098]">
              So Digital Inc.
            </span>
          </div>
          <a
            href={job?.apply}
            target="_blank"
            rel="noopener noreferrer"
            className="py-[1.6rem] text-white text-[1.6rem] font-bold
              rounded-[0.5rem] bg-[#5964e0] text-center
              w-full md:w-[14.1rem]
              hover:bg-[#939bf4]
              trasition-all duration-300"
          >
            Apply now
          </a>
        </div>
      </div>
    </div>
  );
}
