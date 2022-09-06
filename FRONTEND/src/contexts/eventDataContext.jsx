import { createContext, useState } from "react";

export const EventDataContext = createContext({
    isPastEvent: false,
    buttonText: "Register",
    checkButton: false
});

export const EventDataProvider = ({ children }) => {
  const [checkVenue, setCheckVenue] = useState(false);
  const [buttonText, setButtonText] = useState("Register");
  const [checkButton, setCheckButton] = useState(false);
  const value = {
    checkButton,
    setCheckButton,
    checkVenue,
    setCheckVenue,
    buttonText,
    setButtonText,
  };

  return (
    <EventDataContext.Provider value={value}>{children}</EventDataContext.Provider>
  );
};
