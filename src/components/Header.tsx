import { useEffect } from "react";

export default function Header() {
  const handleClick = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    document.documentElement.classList.add(String(theme));
  });

  return (
    <div
      className="
        bg-[url('assets/mobile/bg-pattern-header.svg')]
        px-[2.4rem] pt-[3.2rem] pb-[7.2rem]
        md:bg-[url('assets/tablet/bg-pattern-header.svg')]
        md:bg-no-repeat md:bg-cover
        md:bg-[#f4f6f8] dark:md:bg-[#121721]
        transition-all duration-300
        md:px-[4rem] md:pt-[4.2rem]
        md:pb-[8.6rem]
        xl:bg-[url('assets/desktop/bg-pattern-header.svg')]
        "
    >
      <div
        className="flex justify-between items-center
        max-w-[111rem] mx-auto"
      >
        <div>
          <img src="/assets/desktop/logo.svg" alt="logo-svg" />
        </div>
        <div className="flex items-center gap-[1.6rem]">
          <img src="/assets/desktop/icon-sun.svg" alt="" />
          <div
            className="w-[4.8rem] h-[2.4rem] bg-white 
          rounded-full relative cursor-pointer"
            onClick={handleClick}
          >
            <div
              className="bg-[#5964e0] w-[1.6rem] h-[1.6rem] rounded-full
                       absolute top-1/2 -translate-y-1/2
                       left-[0.6rem]
                       transition-transform duration-300
                       dark:translate-x-[2rem]"
            ></div>
          </div>
          <img src="/assets/desktop/icon-moon.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
