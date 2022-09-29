import { createContext, useState } from "react";

export const PopupContext = createContext({
    popupTrigger: false,
    eventData: {},
});

export const PopupProvider = ({ children }) => {
    const [popupTrigger, setPopupTrigger] = useState(false);
    const [eventData, setEventData] = useState({});
    const value = { popupTrigger, setPopupTrigger, eventData, setEventData };

    return (
        <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
    )
};