import { createContext, useContext, useState } from "react";

const phoneContext = createContext();

export function PhoneProvider({ children }) {
    const [phone, setPhone] = useState("");

    return (
        <phoneContext.Provider value={{ phone, setPhone }}>
            {children}
        </phoneContext.Provider>
    );
}

export function usePhone() {
    return useContext(phoneContext);
}