import { createContext, useState } from "react";

export const PopupContext = createContext({
    popupTrigger: false,
});

export const PopupProvider = ({ children }) => {
    const [popupTrigger, setPopupTrigger] = useState(false);
    const value = { popupTrigger, setPopupTrigger };

    return (
        <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
    )
};