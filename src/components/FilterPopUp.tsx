import { useRef, useState } from "react";
export default function FilterPopUp({
  showFilter,
  setShowFilter,
  setPopUpFilter,
}: {
  showFilter: boolean;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setPopUpFilter: React.Dispatch<React.SetStateAction<Partial<IJobs>>>;
}) {
  const locationRef = useRef<HTMLInputElement>(null);
  const fullTimeRef = useRef<HTMLButtonElement>(null);
  const [check, setChecked] = useState<boolean>(false);
  return (
    <>
      {showFilter && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setShowFilter(false)}
          ></div>
          <div
            className="absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            bg-white rounded-[0.6rem]
            max-w-[32.7rem]
            flex flex-col dark:bg-[#19202d]
            transition-all duration-300"
          >
            <div>
              <div
                className="flex
                p-[2.4rem]
                gap-[1.6rem]
                items-center"
              >
                <svg
                  width="17"
                  height="24"
                  viewBox="0 0 17 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.44772 0C10.6804 0 12.7797 0.870546 14.3585 2.45105C17.2803 5.37556 17.6434 10.8781 15.1348 14.2255L8.44772 23.894L1.75059 14.2119C-0.747974 10.8781 -0.384871 5.37556 2.53695 2.45105C4.11577 0.870546 6.21462 0 8.44772 0ZM5.47359 8.29091C5.47359 9.97484 6.84274 11.3455 8.52487 11.3455C10.207 11.3455 11.5762 9.97484 11.5762 8.29091C11.5762 6.60698 10.207 5.23636 8.52487 5.23636C6.84274 5.23636 5.47359 6.60698 5.47359 8.29091Z"
                    fill="#5964E0"
                  />
                </svg>
                <input
                  ref={locationRef}
                  type="text"
                  placeholder="Filter by location…"
                  className="text-[#19202d] text-[1.6rem]
                    outline-none dark:text-white"
                />
              </div>
              <div
                className="h-px bg-[#6e8098]
                opacity-[0.2] w-full
                "
              ></div>
            </div>
            <div className="flex p-[2.4rem] gap-[1.6rem] items-center">
              <button
                ref={fullTimeRef}
                className={`w-[2.4rem] h-[2.4rem]
                rounded-[0.3rem] cursor-pointer
                ${
                  check
                    ? "bg-[#5964e0]"
                    : "bg-[#19202d] opacity-15 dark:bg-[#fff]"
                }`}
                onClick={() => setChecked((prev) => !prev)}
              ></button>
              <p
                className="text-[1.6rem] font-bold 
                text-[#19202d] dark:text-white"
              >
                Full Time Only
              </p>
            </div>
            <div className="px-[2.4rem] pb-[2.4rem]">
              <button
                className="py-[1.6rem]
                bg-[#5964e0] rounded-[0.5rem] w-full
                text-[1.6rem] font-[700] text-[#fff]
                cursor-pointer"
                onClick={() => {
                  if (locationRef.current) {
                    setPopUpFilter((prev: Partial<IJobs>) => ({
                      ...prev,
                      location: locationRef.current?.value || "",
                    }));
                  }
                  if (fullTimeRef.current) {
                    setPopUpFilter((prev: Partial<IJobs>) => ({
                      ...prev,
                      contract: check === true ? "full time" : "",
                    }));
                  }
                  setShowFilter(false);
                }}
              >
                Search
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
