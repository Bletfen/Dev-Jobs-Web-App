export const handleContract = ({
  check,
  setPopUpFilter,
}: {
  check: boolean;
  setPopUpFilter: React.Dispatch<React.SetStateAction<Partial<IJobs>>>;
}) => {
  setPopUpFilter((prev: Partial<IJobs>) => ({
    ...prev,
    contract: check ? "full time" : "",
  }));
};

export const handleLocation = ({
  locationRef,
  setPopUpFilter,
}: {
  locationRef: React.RefObject<HTMLInputElement | null>;
  setPopUpFilter: React.Dispatch<React.SetStateAction<Partial<IJobs>>>;
}) => {
  if (locationRef.current) {
    setPopUpFilter((prev: Partial<IJobs>) => ({
      ...prev,
      location: locationRef.current?.value || "",
    }));
  }
};

export const handlePosition = ({
  mobileInputRef,
  desktopInputRef,
  setMainFilter,
}: {
  mobileInputRef: React.RefObject<HTMLInputElement | null>;
  desktopInputRef: React.RefObject<HTMLInputElement | null>;
  setMainFilter: React.Dispatch<React.SetStateAction<Partial<IJobs>>>;
}) => {
  const mobileValue = mobileInputRef.current?.value.trim();
  const desktopValue = desktopInputRef.current?.value.trim();

  setMainFilter((prev) => ({
    ...prev,
    position: mobileValue || desktopValue || "",
  }));
};
