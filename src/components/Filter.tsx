import type { MainFilterState } from "../../types.d.ts";
export default function Filter({
  setShowFilter,
  setMainFilter,
  inputRef,
}: {
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setMainFilter: React.Dispatch<React.SetStateAction<MainFilterState>>;
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  return (
    <div
      className="flex justify-between items-center
        px-[2.4rem] py-[1.6rem] bg-white rounded-[0.6rem]
        relative bottom-17"
    >
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Filter by title…"
          className="
            text-[1.6rem] font-[400] text-[#19202d]
            outline-none"
        />
      </div>
      <div className="flex items-center gap-[2.4rem]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
          onClick={() => setShowFilter(true)}
        >
          <path
            d="M19.1076 1.50591e-06H0.860224C0.538187 -0.000593357 0.243138 0.175089 0.0960199 0.454871C-0.0531279 0.738422 -0.0269509 1.07987 0.163593 1.33883L6.84866 10.5411C6.85089 10.5443 6.85333 10.5473 6.85556 10.5504C7.09845 10.8709 7.22995 11.2591 7.23056 11.6579V19.1605C7.22914 19.3825 7.31842 19.5961 7.47853 19.7537C7.63884 19.9112 7.85677 20 8.08405 20C8.19951 19.9998 8.31396 19.9774 8.4207 19.934L12.1772 18.5345C12.5136 18.4339 12.7371 18.1236 12.7371 17.75V11.6579C12.7377 11.2591 12.8692 10.8709 13.1118 10.5504C13.1141 10.5473 13.1165 10.5443 13.1187 10.5411L19.804 1.33864C19.9946 1.07987 20.0207 0.73862 19.8716 0.45507C19.7247 0.175089 19.4294 -0.000593357 19.1076 1.50591e-06Z"
            fill="#6E8098"
          />
        </svg>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
          onClick={() => {
            if (inputRef.current) {
              setMainFilter({ position: inputRef.current.value });
            }
          }}
        >
          <rect width="48" height="48" rx="5" fill="#5964E0" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.3533 26.549H28.2603L33.9529 32.2531L32.2531 33.9529L26.549 28.2603V27.359L26.2353 27.0453C24.9405 28.1576 23.2578 28.8307 21.4153 28.8307C17.3198 28.8307 14 25.5109 14 21.4153C14 17.3198 17.3198 14 21.4153 14C25.5109 14 28.8306 17.3198 28.8306 21.4153C28.8306 23.2578 28.1576 24.9405 27.0396 26.2353L27.3533 26.549ZM16.2817 21.4153C16.2817 24.2503 18.5804 26.549 21.4153 26.549C24.2503 26.549 26.549 24.2503 26.549 21.4153C26.549 18.5804 24.2503 16.2817 21.4153 16.2817C18.5804 16.2817 16.2817 18.5804 16.2817 21.4153Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
